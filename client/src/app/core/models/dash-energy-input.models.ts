export interface ChIndir {
    suma_indir: number
}

export interface Piete {
    piata_id: number,
    piata_ord: number,
    adi_piatades: string
}

export interface TipTranzactie {
    tip_tranzactie_id: number,
    tip_tranzactie_ord: number,
    adi_tiptr_des: string
}

export interface TranzactiiEnergieInput {
    cantitate: number,
    valoare: number,
    piata_id: number,
    tip_tranzactie_id: number
}

export interface Kpi {
    id: number,
    title: string,
    cantitate: number,
    valoare: number,
    costMediu: number,
    icon: string,
    backgroundColor: string
}

export interface PieteComponent {
    sourceTitle: string,
    kpis: Kpi[]
}

export interface dashEnergyInputData {
    energyData: PieteComponent[],
    indirData: number
}