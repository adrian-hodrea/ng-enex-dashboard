const checkFirstDayOfMonth = (date) => {
    let fdtObject = new Date(date);
    if (fdtObject.getDate() === 1) {
        return true
    } else {
        return false
    }
}

export default checkFirstDayOfMonth;