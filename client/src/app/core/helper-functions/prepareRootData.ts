
import kpiDisplayData from './data/kpi-formating-data.js';
import { PieteComponent, TranzactiiEnergieInput, Piete, TipTranzactie, Kpi } from '../models/dash-energy-input.models';


const prepareDataForEnergyInputComponent =
    (bodyData: TranzactiiEnergieInput[], piete: Piete[], tipuriTranzactii: TipTranzactie[]) => {
        /* Parcurg toate tipurile de piete si pentru fiecare 
        tip de piata iau fiecare tip de tranzactie si apoi populez datele de afisat */
        let pieteComponents: PieteComponent[] = [];
        piete.forEach(piata => {
            let pieteData: PieteComponent = {
                sourceTitle: '',
                kpis: []
            };
            pieteData.sourceTitle = `Intrari ${piata.adi_piatades}`;
            let kpisTotal: Kpi = {
                id: 999,
                title: '',
                cantitate: 0,
                valoare: 0,
                costMediu: 0,
                icon: '',
                backgroundColor: ''

            };
            kpisTotal.title = `Total ${piata.adi_piatades}`,

                /* import icon + backgroundColor from centralised module*/
                kpiDisplayData.forEach(kpiDD => {
                    if (kpiDD.id === 999) {
                        kpisTotal.icon = kpiDD.icon;
                        kpisTotal.backgroundColor = `var(${kpiDD.backgroundColorFrom}),  var(${kpiDD.backgroundColorTo})`;
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
                    backgroundColor: ''
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
                        kpi.backgroundColor = `var(${kpiDD.backgroundColorFrom}),  var(${kpiDD.backgroundColorTo})`;
                    }
                })

                pieteData.kpis.push(kpi);
            }) // end of tipuriTranzactii.forEach
            kpisTotal.costMediu = kpisTotal.valoare / kpisTotal.cantitate;
            pieteData.kpis.push(kpisTotal);
            pieteComponents.push(pieteData);
        }) // end of piete.forEach

        let pieteDataTotals: PieteComponent = {
            sourceTitle: `Intrari TOTALE`,
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

        return pieteComponents;
    }

export { prepareDataForEnergyInputComponent };