import {Client, clientResgister} from "@/lib/types.ts";


const getAllClients = async () => {
    await fetch('http://localhost:5000/api/auth/').then(async data => {
        localStorage.setItem('clients', JSON.stringify(await data.json()));
    })
}

const createClient = async (client: clientResgister): Promise<Client> => {
    const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
    })

    const data = await response.json();

    if (response.ok) {
        const clients = JSON.parse(localStorage.getItem('clients') || '[]') as Client[];
        const client = await data.json() as Client;
        clients.push(client);
        return client;
    }

    throw new Error(data.message)

}

export const clientRepo = {
    getAllClients,
    createClient
}