function getTimeRandom() {
    let date = new Date();
    date = date.getTime(date.getMinutes(date.getMinutes() + date.getTimezoneOffset()));
    let random= Math.floor((99 - 11 + 1) * Math.random()) + 11;
    return parseInt(random * (date / 1000) * 0.23 / 4);
}