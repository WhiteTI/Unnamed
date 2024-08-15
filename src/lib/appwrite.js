import {Account, Client, Databases, ID, Storage, Permission, Role} from "appwrite";

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECTID)

const databases = new Databases(client)
const account = new Account(client)

const storage = new Storage(client)

async function getAllCharacters() {
    try {
        return await databases.listDocuments(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_CHARACTER_COLLECTIONID
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

async function getAllWeapons() {
    try {
        return await databases.listDocuments(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_WEAPONS_COLLECTIONID
        );
    } catch (e) {
        console.error(e.message)
    }
}

async function getAllArtifacts() {
    try {
        return await databases.listDocuments(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_ARTIFACTS_COLLECTIONID
        );
    } catch (e) {
        console.error(e.message)
    }
}

async function createCharacter(data) {
    try {
        return await databases.createDocument(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_CHARACTER_COLLECTIONID,
            ID.unique(),
            JSON.stringify(data),
            [
                Permission.read(Role.any()),
                Permission.delete(Role.user('669532bc001e5901da28')),
                Permission.update(Role.user('669532bc001e5901da28')),
                Permission.write(Role.user('669532bc001e5901da28'))
            ]
        )
    } catch (e) {
        console.error(e.message)
    }
}

async function createFile(file) {
    try {
        return await storage.createFile(
            import.meta.env.VITE_BUCKETID,
            ID.unique(),
            file,
            [Permission.read(Role.any())]
        )
    } catch (e) {
        console.error(e.message)
    }
}

export {
    getAllCharacters,
    getCharacter,
    getAllWeapons,
    getAllArtifacts,
    createFile,
    createCharacter,
    account,
}