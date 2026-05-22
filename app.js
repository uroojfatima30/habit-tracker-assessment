// Local State Initialization
let habits = [];
let currentReferenceDate = new Date();

function loadHabits() {
    const savedData = localStorage.getItem('dev_weekends_habits');
    habits = savedData ? JSON.parse(savedData) : [];
}

function saveToStorage() {
    localStorage.setItem('dev_weekends_habits', JSON.stringify(habits));
}

// Date Calculations
function getStartOfWeek(date) {
    const result = new Date(date);
    const day = result.getDay();
    // Monday start implementation
    const diff = result.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(result.setDate(diff));
}

function generateWeekDays(startDate) {
    const days = [];
    for (let i = 0; i < 7; i++) {
        const nextDay = new Date(startDate);
        nextDay.setDate(startDate.getDate() + i);
        days.push(nextDay);
    }
    return days;
}

function formatDateString(date) {
    return date.toISOString().split('T')[0];
}

// Streak Calculation Logic
function calculateStreak(history) {
    let streak = 0;
    let checkDate = new Date(); // Start evaluating from today backwards
    
    while (true) {
        const dateStr = formatDateString(checkDate);
        if (history[dateStr]) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            // If today is unchecked, look at yesterday to check if a past streak is alive
            if (streak === 0 && dateStr === formatDateString(new Date())) {
                checkDate.setDate(checkDate.getDate() - 1);
                continue;
            }
            break;
        }
    }
    return streak;
}

// Dynamic UI Rendering
function renderTracker() {
    const emptyStateEl = document.getElementById('empty-state');
    const gridContainerEl = document.getElementById('tracker-grid-container');
    const gridHeaderRow = document.getElementById('grid-header-row');
    const gridBody = document.getElementById('grid-body');
    const weekRangeText = document.getElementById('week-range-text');

    if (habits.length === 0) {
        emptyStateEl.style.display = 'block';
        gridContainerEl.style.display = 'none';
        weekRangeText.textContent = "No active habits";
        return;
    }

    emptyStateEl.style.display = 'none';
    gridContainerEl.style.display = 'block';

    const startOfWeek = getStartOfWeek(currentReferenceDate);
    const weekDays = generateWeekDays(startOfWeek);

    // Render Date Headings Display
    const options = { month: 'short', day: 'numeric' };
    weekRangeText.textContent = `${startOfWeek.toLocaleDateString('en-US', options)} - ${weekDays[6].toLocaleDateString('en-US', options)}`;

    // Reset Header Columns (Keep base column labels)
    gridHeaderRow.innerHTML = '<th>Habit Name</th><th>Current Streak</th>';
    
    // Append Dynamic Columns
    const todayStr = formatDateString(new Date());
    weekDays.forEach(day => {
        const th = document.createElement('th');
        const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });
        const dayNum = day.getDate();
        th.innerHTML = `<div>${dayName}</div><small style="font-weight:normal; color:#6c757d;">${dayNum}</small>`;
        
        if (formatDateString(day) === todayStr) {
            th.classList.add('today-highlight');
        }
        gridHeaderRow.appendChild(th);
    });

    // Populate Rows
    gridBody.innerHTML = '';
    habits.forEach(habit => {
        const tr = document.createElement('tr');

        // Column 1: Habit info and Action
        const nameTd = document.createElement('td');
        nameTd.innerHTML = `
            <div class="habit-name-container">
                <strong>${habit.name}</strong>
                <button class="delete-btn" onclick="deleteHabit('${habit.id}')">Delete</button>
            </div>
        `;
        tr.appendChild(nameTd);

        // Column 2: Streak display
        const streakTd = document.createElement('td');
        const currentStreak = calculateStreak(habit.history);
        streakTd.innerHTML = `<span class="streak-badge">🔥 ${currentStreak} days</span>`;
        tr.appendChild(streakTd);

        // Columns 3-9: Interaction Matrix
        weekDays.forEach(day => {
            const dateStr = formatDateString(day);
            const checkTd = document.createElement('td');
            checkTd.classList.add('checkbox-cell');
            if (dateStr === todayStr) {
                checkTd.classList.add('today-highlight');
            }

            const isChecked = habit.history[dateStr] ? 'checked' : '';
            checkTd.innerHTML = `
                <input type="checkbox" class="habit-checkbox" ${isChecked} 
                    onchange="toggleDay('${habit.id}', '${dateStr}')">
            `;
            tr.appendChild(checkTd);
        });

        gridBody.appendChild(tr);
    });
}

// Global Core Actions 
window.deleteHabit = function(habitId) {
    habits = habits.filter(h => h.id !== habitId);
    saveToStorage();
    renderTracker();
};

window.toggleDay = function(habitId, dateString) {
    const habit = habits.find(h => h.id === habitId);
    if (habit) {
        habit.history[dateString] = !habit.history[dateString];
        saveToStorage();
        renderTracker();
    }
};

// Lifecycle Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadHabits();
    renderTracker();

    document.getElementById('add-habit-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('habit-input');
        const value = input.value.trim();
        
        if (value) {
            habits.push({
                id: 'habit_' + Date.now(),
                name: value,
                history: {}
            });
            saveToStorage();
            renderTracker();
            input.value = '';
        }
    });

    document.getElementById('prev-week').addEventListener('click', () => {
        currentReferenceDate.setDate(currentReferenceDate.getDate() - 7);
        renderTracker();
    });

    document.getElementById('next-week').addEventListener('click', () => {
        currentReferenceDate.setDate(currentReferenceDate.getDate() + 7);
        renderTracker();
    });

    document.getElementById('current-week-btn').addEventListener('click', () => {
        currentReferenceDate = new Date();
        renderTracker();
    });
});

