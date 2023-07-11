

let showDayName = Date().slice(0, 3); // Use Date() function to get current date 
let showTimeInHr = parseInt(Date().slice(16, 18)); // Slice the time
let showMinutes = Date().slice(19, 24);
let indication

// Convert to dayName
switch (showDayName) {
    case 'Mon':
        showDayName = 'Monday'
        break;
    case 'Tue':
        showDayName = 'Tuesday'
        break;
    case 'Wed':
        showDayName = 'Wednesday'
        break;
    case 'Thus':
        showDayName = 'Thusday'
        break;
    case 'Fri':
        showDayName = 'Friday'
        break;
    case 'Sat':
        showDayName = 'Saturday'
        break;
    case 'Sun':
        showDayName = 'Sunday'
        break;

    default: 'Today'
        break;
}

/* converts 24 hrs time to 12 hrs time
   Determines AM or PM 
*/
function time12() {
    indication = (showTimeInHr < 12) ? 'AM' : 'PM';
    if (showTimeInHr > 12) {
        showTimeInHr = showTimeInHr - 12;
    } else if (showTimeInHr == 0) {
        showTimeInHr = 12
    }
}

time12();

document.getElementById('day').innerHTML = (`Today is: ${showDayName}`);
document.getElementById('time').innerHTML = (`Current time is: ${showTimeInHr} ${indication} ${showMinutes}`);