import {Client, registerClient} from "@/models/clients.ts";

export const fetchClients = async () => {
    return await fetch('http://localhost:5000/api/auth/').then(data => data.json())
}

export const createClient = async (client: registerClient): Promise<Client> => {
    const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
    })

    const data = await response.json();

    if (response.ok)
        return data.user;

    throw new Error(data.message)

}