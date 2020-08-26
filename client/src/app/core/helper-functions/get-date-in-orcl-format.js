import datesMapping from './data/map-to-orcl-dates-format';

const getDateInOrclFormat = (date) => {
    for (let property in datesMapping) {
        if (property === date) {
            return datesMapping[property]
        }
    } 
}

export default getDateInOrclFormat;