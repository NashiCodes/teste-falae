export interface Client {
    id: string,
    name: string,
    email: string,
    address: string,
    phone?: string,
}

export interface registerClient {
    name: string,
    email: string,
    address: string,
    phone?: string,
}