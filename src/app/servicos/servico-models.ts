export interface Cortes {
    id: number;
    nome: string;
    preco: number;
    foto: string;
}

export interface Clientes{
    id: number;
    nome: string;
    cpf: string;
    contato: string;
    foto: string;
}

export interface Agenda{
    id: number;
    data: string;
    hora: string;
    cliente: number;
    corte: number;
}
