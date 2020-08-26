const checkLastDayOfMonth = (date) => {
    let tdt = new Date(date);
    return tdt.getDate() === new Date(tdt.getFullYear(),tdt.getMonth()+1,0).getDate();}

export default checkLastDayOfMonth;