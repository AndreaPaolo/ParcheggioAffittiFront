import { Affittuatario, Parcheggio, Sede } from "./model-body";

export interface Sedi{
    id: number;
    nome: string;
}

export interface Affittuatari{
    id: number;
    nome: string;
    cognome: string;
    numero_telefono: string;
}

export interface Parcheggi{
    id: number;
    nome: string;
    sede: Sede;
}

export interface Affitti{
    id: number;
    data_inizio: Date;
    data_fine: Date;
    parcheggio: Parcheggio;
    affittuatario: Affittuatario;
}
