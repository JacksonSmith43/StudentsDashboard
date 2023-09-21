/* Draggable Uhr Start */
var isUhrMouseDown, initUhrX, initUhrY, uhrHeight = draggableUhrContainer.offsetHeight, uhrWidth = draggableUhrContainer.offsetWidth;

draggableUhrContainer.addEventListener('mousedown', function (e) {
    isUhrMouseDown = true;
    document.body.classList.add('no-select-uhr');
    initUhrX = e.offsetX;
    initUhrY = e.offsetY;
});

document.addEventListener('mousemove', function (e) {
    if (isUhrMouseDown) {
        var uhrCx = e.clientX - initUhrX,
            uhrCy = e.clientY - initUhrY;
        if (uhrCx < 0) {
            uhrCx = 0;
        }
        if (uhrCy < 0) {
            uhrCy = 0;
        }
        if (window.innerWidth - e.clientX + initUhrX < uhrWidth) {
            uhrCx = window.innerWidth - uhrWidth;
        }
        if (e.clientY > window.innerHeight - uhrHeight + initUhrY) {
            uhrCy = window.innerHeight - uhrHeight;
        }
        draggableUhrContainer.style.left = uhrCx + 'px';
        draggableUhrContainer.style.top = uhrCy + 'px';
    }
});

draggableUhrContainer.addEventListener('mouseup', function () {
    isUhrMouseDown = false;
    document.body.classList.remove('no-select-uhr');
});
/* Draggable Uhr End */



/* Draggable To-Do Start */
var isToDoMouseDown, initToDoX, initToDoY, toDoHeight = draggableToDoContainer.offsetHeight, toDoWidth = draggableToDoContainer.offsetWidth;

draggableToDoContainer.addEventListener('mousedown', function (e) {
    isToDoMouseDown = true;
    document.body.classList.add('no-select-to-do');
    initToDoX = e.offsetX;
    initToDoY = e.offsetY;
});

document.addEventListener('mousemove', function (e) {
    if (isToDoMouseDown) {
        var toDoCx = e.clientX - initToDoX,
            toDoCy = e.clientY - initToDoY;
        if (toDoCx < 0) {
            toDoCx = 0;
        }
        if (toDoCy < 0) {
            toDoCy = 0;
        }
        if (window.innerWidth - e.clientX + initToDoX < toDoWidth) {
            toDoCx = window.innerWidth - toDoWidth;
        }
        if (e.clientY > window.innerHeight - toDoHeight + initToDoY) {
            toDoCy = window.innerHeight - toDoHeight;
        }
        draggableToDoContainer.style.left = toDoCx + 'px';
        draggableToDoContainer.style.top = toDoCy + 'px';
    }
});

draggableToDoContainer.addEventListener('mouseup', function () {
    isToDoMouseDown = false;
    document.body.classList.remove('no-select-to-do');
});
/* Draggable To-Do End */


/* Draggable Weather Start */
var isWeatherMouseDown, initWeatherX, initWeatherY, weatherHeight = draggableWeatherContainer.offsetHeight, weatherWidth = draggableWeatherContainer.offsetWidth;

draggableWeatherContainer.addEventListener('mousedown', function (e) {
    isWeatherMouseDown = true;
    document.body.classList.add('no-select-weather');
    initWeatherX = e.offsetX;
    initWeatherY = e.offsetY;
});

document.addEventListener('mousemove', function (e) {
    if (isWeatherMouseDown) {
        var weatherCx = e.clientX - initWeatherX,
            weatherCy = e.clientY - initWeatherY;
        if (weatherCx < 0) {
            weatherCx = 0;
        }
        if (weatherCy < 0) {
            weatherCy = 0;
        }
        if (window.innerWidth - e.clientX + initWeatherX < weatherWidth) {
            weatherCx = window.innerWidth - weatherWidth;
        }
        if (e.clientY > window.innerHeight - weatherHeight + initWeatherY) {
            weatherCy = window.innerHeight - weatherHeight;
        }
        draggableWeatherContainer.style.left = weatherCx + 'px';
        draggableWeatherContainer.style.top = weatherCy + 'px';
    }
});

draggableWeatherContainer.addEventListener('mouseup', function () {
    isWeatherMouseDown = false;
    document.body.classList.remove('no-select-weather');
});
/* Draggable Weather End */


/* Draggable Fotos Start */
var isFotosMouseDown, initFotosX, initFotosY, fotosHeight = draggableFotosContainer.offsetHeight, fotosWidth = draggableFotosContainer.offsetWidth;

draggableFotosContainer.addEventListener('mousedown', function (e) {
    isFotosMouseDown = true;
    document.body.classList.add('no-select-fotos');
    initFotosX = e.offsetX;
    initFotosY = e.offsetY;
});

document.addEventListener('mousemove', function (e) {
    if (isFotosMouseDown) {
        var fotosCx = e.clientX - initFotosX,
            fotosCy = e.clientY - initFotosY;
        if (fotosCx < 0) {
            fotosCx = 0;
        }
        if (fotosCy < 0) {
            fotosCy = 0;
        }
        if (window.innerWidth - e.clientX + initFotosX < fotosWidth) {
            fotosCx = window.innerWidth - fotosWidth;
        }
        if (e.clientY > window.innerHeight - fotosHeight + initFotosY) {
            fotosCy = window.innerHeight - fotosHeight;
        }
        draggableFotosContainer.style.left = fotosCx + 'px';
        draggableFotosContainer.style.top = fotosCy + 'px';
    }
});

draggableFotosContainer.addEventListener('mouseup', function () {
    isFotosMouseDown = false;
    document.body.classList.remove('no-select-fotos');
});
/* Draggable Fotos End */



/* Draggable Primitive Calendar Start */
var isCalendarMouseDown, initCalendarX, initCalendarY, calendarHeight = draggablePrimitiveCalendarContainer.offsetHeight, calendarWidth = draggablePrimitiveCalendarContainer.offsetWidth;

draggablePrimitiveCalendarContainer.addEventListener('mousedown', function (e) {
    isCalendarMouseDown = true;
    document.body.classList.add('no-select-primitive-calendar');
    initCalendarX = e.offsetX;
    initCalendarY = e.offsetY;
});

document.addEventListener('mousemove', function (e) {
    if (isCalendarMouseDown) {
        var calendarCx = e.clientX - initCalendarX,
        calendarCy = e.clientY - initCalendarY;
        if (calendarCx < 0) {
            calendarCx = 0;
        }
        if (calendarCy < 0) {
            calendarCy = 0;
        }
        if (window.innerWidth - e.clientX + initCalendarX < calendarWidth) {
            calendarCx = window.innerWidth - calendarWidth;
        }
        if (e.clientY > window.innerHeight - calendarHeight + initCalendarY) {
            calendarCy = window.innerHeight - calendarHeight;
        }
        draggablePrimitiveCalendarContainer.style.left = calendarCx + 'px';
        draggablePrimitiveCalendarContainer.style.top = calendarCy + 'px';
    }
});

draggablePrimitiveCalendarContainer.addEventListener('mouseup', function () {
    isCalendarMouseDown = false;
    document.body.classList.remove('no-select-primitive-calendar');
});
/* Draggable Primitive Calendar End */




/* Draggable Fancy Calendar Start */
var isFancyCalendarMouseDown, initFancyCalendarX, initFancyCalendarY, fancyCalendarHeight = draggableFancyCalendarContainer.offsetHeight, fancyCalendarWidth = draggableFancyCalendarContainer.offsetWidth;

draggableFancyCalendarContainer.addEventListener('mousedown', function (e) {
    isFancyCalendarMouseDown = true;
    document.body.classList.add('no-select-fancy-calendar');
    initFancyCalendarX = e.offsetX;
    initFancyCalendarY = e.offsetY;
});

document.addEventListener('mousemove', function (e) {
    if (isFancyCalendarMouseDown) {
        var fancyCalendarCx = e.clientX - initFancyCalendarX,
        fancyCalendarCy = e.clientY - initFancyCalendarY;
        if (fancyCalendarCx < 0) {
            fancyCalendarCx = 0;
        }
        if (fancyCalendarCy < 0) {
            fancyCalendarCy = 0;
        }
        if (window.innerWidth - e.clientX + initFancyCalendarX < fancyCalendarWidth) {
            fancyCalendarCx = window.innerWidth - fancyCalendarWidth;
        }
        if (e.clientY > window.innerHeight - fancyCalendarHeight + initFancyCalendarY) {
            fancyCalendarCy = window.innerHeight - fancyCalendarHeight;
        }
        draggableFancyCalendarContainer.style.left = fancyCalendarCx + 'px';
        draggableFancyCalendarContainer.style.top = fancyCalendarCy + 'px';
    }
});

draggableFancyCalendarContainer.addEventListener('mouseup', function () {
    isFancyCalendarMouseDown = false;
    document.body.classList.remove('no-select-fancy-calendar');
});
/* Draggable Fancy Calendar End */

