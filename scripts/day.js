document.addEventListener('DOMContentLoaded', function () {
    var txt;
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialView: 'dayGridMonth',
        selectable: true,
        dateClick: function (dateClickInfo) {
        confirmEvent(dateClickInfo);
    }
    });
    calendar.render();
});

function confirmEvent(dateClickInfo) {
    var regex = '\\d{4}-\\d{2}-\\d{2}';
    var r = confirm('Do you want to create an event?');
    var eventDate;
    if (r == true) {
        eventDate = prompt('Enter a date in YYYY-MM-DD format:');
        if (eventDate.match(regex) && isValidDate(eventDate)) {
            var event = prompt('Enter the event name:');
        } else {
            alert('Invalid date format');
        }
    }
    else {
        alert('Cancelling event...');
    }
}

function isValidDate(date) {
    var parts = date.split("-");
    var year = parseInt(parts[0],10);
    var month = parseInt(parts[1],10);
    var day = parseInt(parts[2],10);
    var currentDate = new Date();
    alert(currentDate.getFullYear());
}