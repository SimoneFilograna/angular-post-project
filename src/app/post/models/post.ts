export class Post {
    id: string;
    titolo: string;
    testo: string;
    categoria: string;
    autore: string;
    dataCreazione: Date | string;
    dataModifica?: Date | string;

    constructor(ps: Partial<Post>) {
        this.id = ps.id ? ps.id : '0',
            this.titolo = ps.titolo ? ps.titolo : '';
        this.testo = ps.testo ? ps.testo : '';
        this.categoria = ps.categoria ? ps.categoria : '';
        this.autore = ps.autore ? ps.autore : 'ND';
        this.dataCreazione = ps.dataCreazione ? ps.dataCreazione : "ND";
    }

}