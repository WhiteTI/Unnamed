import {Client, Databases} from "appwrite";

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECTID);

const databases = new Databases(client);

async function getAllCharacters() {
    try {
        return await databases.listDocuments(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_COLLECTIONID
        );
    } catch (e) {
        throw e.message
    }
}

async function getCharacter(id) {
    try {
        return await databases.getDocument(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_COLLECTIONID,
            id
        )
    } catch (e) {
        throw e.message
    }
}

export {
    getAllCharacters,
    getCharacter
}