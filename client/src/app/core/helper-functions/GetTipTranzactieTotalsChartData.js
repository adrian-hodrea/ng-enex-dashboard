import GetTipTranzactieTotals from './GetTipTranzactieTotals.js';

const GetTipTranzactieTotalsChartData = (data) => {
    let tipTranzTotals = GetTipTranzactieTotals(data);
    let tipTranzTotalsPieChartData = tipTranzTotals.map(
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
        return tipTranzTotalsPieChartData;
}

export default GetTipTranzactieTotalsChartData;
