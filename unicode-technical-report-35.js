Date.prototype.month = Date.prototype.getMonth;
Date.prototype.day = Date.prototype.getDay;
Date.prototype.year = Date.prototype.getFullYear;
Date.prototype.date = Date.prototype.getDate;
Date.prototype.hours = Date.prototype.getHours;

const  format = (date, str = '') => {
    const toDate = new Date(date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const smallMonths = months.map((m) => m.slice(0, 3));
    const smallDays = days.map((d) => d.slice(0, 3));
    //console.log(smallMonths)
    //console.log(smallDays)

    // Day's control
    str = str.replace(/dd/g, ("0" + toDate.date()).slice(-2));
    str = str.replace(/d/g, toDate.date());
    //console.log(str)

    // Hour's control
    str = str.replace(/HH/g, ("0" + toDate.hours()).slice(-2));
    str = str.replace(/H/g, toDate.hours());
    str = str.replace(/hh/g, ("0" + (toDate.hours() % 12 || 12)).slice(-2));
    str = str.replace(/h/g, toDate.hours() % 12 || 12);

    // Minute's control
    str = str.replace(/mm/g, ("0" + toDate.getMinutes()).slice(-2));
    str = str.replace(/m/g, toDate.getMinutes());

    // Second's control
    str = str.replace(/ss/g, ("0" + toDate.getSeconds()).slice(-2));
    str = str.replace(/s/g, toDate.getSeconds());

    // Era's control
    str = str.replace(/GGGG/g, toDate.year() < 0 ? "Before Christ" : "Anno Domini");
    str = str.replace(/G/g, toDate.year() < 0 ? "BC" : "AD");

    // Year's control
    if (toDate.year() < 0) toDate.setFullYear(-toDate.year());
    str = str.replace(/yyyy/g, toDate.year().toString().padStart(4, "0"));
    str = str.replace(/y/g, toDate.year().toString().replace(/^0+/, ""));

    // AM/PM's control
    str = str.replace(/a/g, toDate.hours() < 12 ? "AM" : "PM");

    // Month's control
    str = str.replace(/(?<!M)MM(?!M)/g, (toDate.month() + 1).toString().length < 10 ? "0" + (toDate.month() + 1) : toDate.month() + 1);
    str = str.replace(/(?<!([MPA]))M(?!M)/g, toDate.month() + 1);
    str = str.replace(/MMMM/g, months[toDate.month()]);
    str = str.replace(/MMM/g, smallMonths[toDate.month()].slice(0, 3));

    // Days of the Week
    str = str.replace(/EEEE/g, days[toDate.getDay()]);
    str = str.replace(/E/g, smallDays[toDate.getDay()].slice(0, 3));
    //console.log(str)

    return str;
}

//format(new Date('01/01/2020'), '01/')