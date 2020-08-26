import GetPieteData from './GetPieteData.js';

const GetPieteChartData = (data) => {
    let pieteData = GetPieteData(data);
    let pieteChartData = pieteData.map(
        item => {
            let rObj = {};
            rObj.name = item.title;
            rObj.cantitate = item.cantitate;
            rObj.valoare = item.valoare;
            rObj.costMediu = item.costMediu;
            rObj.icon = item.icon;
            rObj.backgroundColor = item.backgroundColor;
            return rObj;
        })
        return pieteChartData;

}

export default GetPieteChartData;
