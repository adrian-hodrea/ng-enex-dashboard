const convertDateFormat = (inputDate) => {
    let year = inputDate.substring(0, 4);
    let month = inputDate.substring(5, 7);
    let day = inputDate.substring(8, 10);
    let convertedDay = `${day}.${month}.${year}`;
    return convertedDay;
}

export default convertDateFormat;


