
import kpiDisplayData from './data/kpi-formating-data.js';
import { PieteComponent, TranzactiiEnergieInput, Piete, TipTranzactie, Kpi, ChIndir } from '../models/dash-energy-input.models';


const prepareDataForEnergyInputComponent =
    (bodyData: TranzactiiEnergieInput[],
        piete: Piete[],
        tipuriTranzactii: TipTranzactie[],
        chIndir: ChIndir) => {
        /* Parcurg toate tipurile de piete si pentru fiecare 
        tip de piata iau fiecare tip de tranzactie si apoi populez datele de afisat */
        let pieteComponents: PieteComponent[] = [];
        piete.forEach(piata => {
            let pieteData: PieteComponent = {
                sourceTitle: '',
                kpis: []
            };
            pieteData.sourceTitle = piata.adi_piatades;
            let kpisTotal: Kpi = {
                id: 999,
                title: '',
                cantitate: 0,
                valoare: 0,
                costMediu: 0,
                icon: '',
                backgroundColor: '',
                backgroundColorNoQuant: ''
            };
            kpisTotal.title = `Total ${piata.adi_piatades}`,

                /* import icon + backgroundColor from centralised module*/
                kpiDisplayData.forEach(kpiDD => {
                    if (kpiDD.id === 999) {
                        kpisTotal.icon = kpiDD.icon;
                        kpisTotal.backgroundColor = kpiDD.backgroundColorFrom;
                        kpisTotal.backgroundColorNoQuant = kpiDD.backgroundColorNoQuant;
                    }
                })

            tipuriTranzactii.forEach(tipTr => {
                let kpi: Kpi = {
                    id: tipTr.tip_tranzactie_id,
                    title: `Cantitati ${tipTr.adi_tiptr_des}`,
                    cantitate: 0,
                    valoare: 0,
                    costMediu: 0,
                    icon: '',
                    backgroundColor: '',
                    backgroundColorNoQuant: ''
                }

                /* iau datele din tranzactii, daca exista 
                pentru combinatia PIATA + TIP TRANZACTIE */
                bodyData.forEach(trData => {
                    if (trData.piata_id === piata.piata_id &&
                        trData.tip_tranzactie_id === tipTr.tip_tranzactie_id) {
                        kpi.cantitate = trData.cantitate;
                        kpi.valoare = trData.valoare;
                        kpi.costMediu = kpi.valoare / kpi.cantitate;
                        kpisTotal.cantitate = kpisTotal.cantitate + trData.cantitate;
                        kpisTotal.valoare = kpisTotal.valoare + trData.valoare;
                    }

                })
                /* import icon + backgroundColor from centralised module*/
                kpiDisplayData.forEach(kpiDD => {
                    if (kpiDD.id === tipTr.tip_tranzactie_id) {
                        kpi.icon = kpiDD.icon;
                        kpi.backgroundColor = kpiDD.backgroundColorFrom;
                        kpi.backgroundColorNoQuant = kpiDD.backgroundColorNoQuant;
                    }
                })

                pieteData.kpis.push(kpi);
            }) // end of tipuriTranzactii.forEach
            kpisTotal.costMediu = kpisTotal.valoare / kpisTotal.cantitate;
            pieteData.kpis.push(kpisTotal);
            pieteComponents.push(pieteData);
        }) // end of piete.forEach

        let pieteDataTotals: PieteComponent = {
            sourceTitle: `TOTALE`,
            kpis: []
        }
        //pieteDataTotals.kpis = new Array(...pieteComponents[0].kpis);
        pieteDataTotals.kpis = pieteComponents[0].kpis.map(k => {
            let obj = { ...k };
            return obj;
        })

        pieteDataTotals.kpis.forEach(kpiTotal => {
            if (kpiTotal.title.startsWith('Total')) {
                kpiTotal.title = 'Total INTRARI';
            }
            pieteComponents.forEach((comp, index) => {
                if (index > 0) {
                    comp.kpis.forEach(kpiTip => {
                        if (kpiTotal.title.startsWith('Total')) {
                            if (kpiTip.title.startsWith('Total')) {
                                kpiTotal.cantitate = kpiTotal.cantitate + kpiTip.cantitate;
                                kpiTotal.valoare = kpiTotal.valoare + kpiTip.valoare;
                            }
                        } else {
                            if (kpiTotal.title === kpiTip.title) {
                                kpiTotal.cantitate = kpiTotal.cantitate + kpiTip.cantitate;
                                kpiTotal.valoare = kpiTotal.valoare + kpiTip.valoare;
                            }
                        }
                    })
                }
            })

            kpiTotal.costMediu = kpiTotal.valoare / kpiTotal.cantitate;
        }
        )

        pieteComponents.push(pieteDataTotals);

        /* Generez obiectul KPI pentru pozitia de costuri fixe administrative */
        const intrariTotaleInputType = pieteComponents[pieteComponents.length - 1].kpis;
        const intrariTotaleKPI = intrariTotaleInputType[intrariTotaleInputType.length - 1];
        let costuriFixeKpi = {
            id: 0,
            title: "Costuri FIXE(ADM)",
            cantitate: intrariTotaleKPI.cantitate,
            valoare: chIndir.suma_indir,
            costMediu: chIndir.suma_indir / intrariTotaleKPI.cantitate,
            icon: "fas fa-stamp",
            backgroundColor: 'rgb(209, 58, 223)',
            backgroundColorNoQuant: ''
        }
        /* Generez obiectul KPI pentru pozitia de costuri totale */

        let costTotalKpi = {
            id: 0,
            title: "Cost TOTAL",
            cantitate: intrariTotaleKPI.cantitate,
            valoare: intrariTotaleKPI.valoare + chIndir.suma_indir,
            costMediu: (intrariTotaleKPI.valoare + chIndir.suma_indir) / intrariTotaleKPI.cantitate,
            icon: "fas fa-funnel-dollar",
            backgroundColor: '#006187',
            backgroundColorNoQuant: ''
        }


        console.log('pieteComponents:', pieteComponents);
        let rootData = {
            energyData: pieteComponents,
            costuriFixeKpi: costuriFixeKpi,
            costTotalKpi: costTotalKpi
        }
        return rootData;
    }

export { prepareDataForEnergyInputComponent };