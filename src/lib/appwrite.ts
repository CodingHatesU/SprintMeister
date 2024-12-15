import { Client, Account, Storage, Users, Databases} from "node-appwrite";
import "server-only"

export async function createAdminClient() {
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
        .setKey(process.env.NEXT_APPWRITE_KEY!);


    const account = new Account(client);

    return {
        get account() {
            return new Account(client);
        }
    }
}