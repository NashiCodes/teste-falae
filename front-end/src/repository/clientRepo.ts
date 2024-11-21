import {Client, clientResgister} from "@/lib/types.ts";

export let clients = Array<Client>();

const getAllClients = async () => {
    await fetch('http://localhost:5000/api/auth/').then(async data => {
        clients = await data.json() as Client[];
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
        clients.push(data.user);
        return data.user;
    }

    throw new Error(data.message)

}

export const clientRepo = {
    getAllClients,
    createClient
}