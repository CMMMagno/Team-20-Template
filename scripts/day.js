document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        eventDidMount: function (info) {
            var tooltip = new Tooltip(info.el, {
                title: info.event.extendedProps.description,
                placement: 'top',
                trigger: 'hover',
                container: 'body'
            });
        },

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
    if (promptEvent()) {
        var eventTitle = prompt('Enter event title:')
        calendar.addEvent({
            title: eventTitle,
            start: dateClickInfo.date,
        });
    }
}

function confirmEventButton() {
    if (promptEvent()) {
        var eventDate = prompt('Enter event date:');
        var date = new Date(eventDate + 'T00:00:00');
        var eventTitle = prompt('Enter event title:');
        if (!isNaN(date.valueOf())) {
            calendar.addEvent({
                title: eventTitle,
                start: date.getDate(),
            })
        }
    }
}