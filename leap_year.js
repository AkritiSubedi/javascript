function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not a leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not a leap year.";
    }
}

// Example usage:
let yearToCheck = 2024;
console.log(isLeap(yearToCheck));
