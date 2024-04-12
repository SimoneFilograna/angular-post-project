export interface User {
    username: string;
    password: string;
    nomePenna?: string;			//(presente per 'Scrittore')
    ruolo: 'Lettore' | 'Scrittore' | 'Admin'
}