import kpiDisplayData from './data/kpi-formating-data.js';
import getRootCssVariableValue from './getRootCssVariableValue.js';


const GetTipTranzactieTotals = (props) => {
    const {energyData} = props;
    const tipTranzTotals = energyData[energyData.length - 1].kpis.map(
        (item,index) => {
            let rObj = {};
            rObj.title = item.title.substring(10);
            rObj.cantitate = item.cantitate;
            rObj.valoare = item.valoare;
            rObj.costMediu = item.costMediu;
            kpiDisplayData.forEach(kpiDD => {
                if (kpiDD.id === item.id) {
                    rObj.icon = kpiDD.icon;
                    rObj.backgroundColor = kpiDD.backgroundColorFrom;
                }
            })
            
            rObj.backgroundColor = getRootCssVariableValue(rObj.backgroundColor);
            return rObj
        }
    )
    tipTranzTotals.pop();   
    return tipTranzTotals;
}
  
export default GetTipTranzactieTotals;

