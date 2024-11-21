import {Client, clientResgister} from "@/lib/types.ts";
import {clientRepo} from "@/repository/clientRepo.ts";

export const getAllClients = async () => {
    return clientRepo.getAllClients();
}

export const createClient = async (client: clientResgister): Promise<Client> => {
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