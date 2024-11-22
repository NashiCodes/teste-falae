import {Client, clientResgister} from "@/lib/types.ts";
import {clientRepo} from "@/repository/clientRepo.ts";

export const fetchClients = async () => {
    return await clientRepo.getAllClients();
}

export const createClient = async (client: clientResgister): Promise<Client> => {
    return clientRepo.createClient(client)
}