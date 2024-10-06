import {Account, Client, Databases, ID, Storage, Permission, Role, Query} from "appwrite";

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

async function getAllWeapons(offset) {
    try {
        return await databases.listDocuments(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_WEAPONS_COLLECTIONID,
            [
                Query.limit(25),
                Query.offset(offset)
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

async function createWeapon(data) {
    try {
        return await databases.createDocument(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_WEAPONS_COLLECTIONID,
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

async function createArtifact(data) {
    try {
        return await databases.createDocument(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_ARTIFACTS_COLLECTIONID,
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

async function createCharacterImage(file) {
    try {
        return await storage.createFile(
            import.meta.env.VITE_CHARACTERS_BUCKETID,
            ID.unique(),
            file,
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

async function createWeaponOrArtifactImage(file) {
    try {
        return await storage.createFile(
            import.meta.env.VITE_WEAPONS_AND_ARTIFACTS_BUCKETID,
            ID.unique(),
            file,
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

export {
    getAllCharacters,
    getCharacter,
    getAllWeapons,
    getAllArtifacts,
    createCharacterImage,
    createCharacter,
    createWeapon,
    createArtifact,
    createWeaponOrArtifactImage,
    account,
}