const GetTotalsStackedBarChartData = (data) => {
    const chIndir = data.indirData.suma_indir;
    const intrariTotaleInputType = data.energyData[data.energyData.length - 1].kpis;
    const intrariTotaleKPI = intrariTotaleInputType[intrariTotaleInputType.length - 1];
    let StackedBarChartDataValues = [{
        name: "RON", 
        Cost_Intrari: intrariTotaleKPI.valoare,
        Cost_Fix: chIndir
    }]
    return StackedBarChartDataValues;
}


const GetTotalsStackedBarChartDataMwh = (data) => {
    const chIndir = data.indirData.suma_indir;
    const intrariTotaleInputType = data.energyData[data.energyData.length - 1].kpis;
    const intrariTotaleKPI = intrariTotaleInputType[intrariTotaleInputType.length - 1];
    let StackedBarChartDataValuesMwh = [{
        name: "RON/MWh", 
        Cost_Mediu_Intrari: intrariTotaleKPI.costMediu,
        Cost_Mediu_Adm: (intrariTotaleKPI.valoare + chIndir) / intrariTotaleKPI.cantitate - intrariTotaleKPI.costMediu
    }]
    return StackedBarChartDataValuesMwh;
}


export {GetTotalsStackedBarChartData,  GetTotalsStackedBarChartDataMwh};

