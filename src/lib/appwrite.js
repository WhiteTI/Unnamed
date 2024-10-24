import {Client, Databases, Query} from "appwrite";

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECTID)

const databases = new Databases(client)

async function getAllCharacters() {
    try {
        return await databases.listDocuments(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_CHARACTER_COLLECTIONID,
            [
                Query.limit(100),
                // Query.select(['$id', 'name', 'listImage', 'rarity', 'weaponType']),
                Query.orderDesc('')
            ]
        );
    } catch (e) {
        console.error(e.message)
    }
}

async function getCharacter(id) {
    try {
        return await databases.getDocument(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_CHARACTER_COLLECTIONID,
            id
        )
    } catch (e) {
        console.error(e.message)
    }
}

async function getAllWeapons(offset, filters) {
    try {
        return await databases.listDocuments(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_WEAPONS_COLLECTIONID,
            [
                Query.limit(25),
                Query.offset(offset),
                Query.orderDesc("rarity"),
                Query.orderAsc("weaponType"),
                ...filters
            ]
        );
    } catch (e) {
        console.error(e.message)
    }
}

async function getAllArtifacts() {
    try {
        return await databases.listDocuments(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_ARTIFACTS_COLLECTIONID,
            [Query.limit(100), Query.orderDesc('')]
        );
    } catch (e) {
        console.error(e.message)
    }
}

export {
    getAllCharacters,
    getCharacter,
    getAllWeapons,
    getAllArtifacts,
}