// Back function of the nav
function goBack() {
    window.history.back()
}

// Calendar javascript
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',

        selectable: true,
        dateClick: function (dateClickInfo) {
            confirmEventDay(dateClickInfo);
        },
        headerToolbar: {
            center: 'addEventButton',
        },
        customButtons: {
            addEventButton: {
                text: 'Add event...',
                click: function () {
                    confirmEventButton();
                },
            },

        },

        events: [{
                title: 'Canada Day',
                start: '2020-07-01',
            },
            {
                title: 'Halloween',
                start: '2020-11-01'
            },
            {
                title: 'Christmas Eve',
                start: '2020-12-24',
            },
            {
                title: 'Christmas',
                start: '2020-12-25',
            },
            {
                title: 'Boxing Day',
                start: '2020-12-26',
            },
            {
                title: "New Years Eve",
                start: '2020-12-31',
            },
            {
                title: 'New Year',
                start: '2021-01-01'
            }
        ],

        eventColor: 'green'
    });
    calendar.render();
});

function promptEvent() {
    var r = confirm('Do you want to create an event?');
    return (r ? r : alert('Cancelling event...'));
}

function confirmEventDay(dateClickInfo) {
    date = dateClickInfo.dateStr;
    if (promptEvent()) {
        var eventTitle = prompt('Enter event title:')
        db.collection('event').add({
            title: eventTitle,
            start: date,
        });
    }
}

function confirmEventButton() {
    if (promptEvent()) {
        var eventDate = prompt('Enter event date:');
        var date = new Date(eventDate + 'T00:00:00');
        var eventTitle = prompt('Enter event title:');
        if (!isNaN(date.valueOf())) {
            db.collection('event').add({
                title: eventTitle,
                start: eventDate,
            });
        } else {
            alert('Invalid date; must be valid format (YYYY-MM-DD)');
        }
    }
}