export class Sede{
  nome: string | undefined;
}

export class Affittuatario{
  nome: string | undefined;
  cognome: string | undefined;
  numero_telefono: string | undefined;
}

export class Parcheggio{
  nome: string | undefined;
  sede_id: number | undefined;
}

export class Affitto{
  data_inizio: string | undefined;
  data_fine: string | undefined;
  parcheggio_id: number | undefined;
  affittuatario_id: number | undefined;
}

