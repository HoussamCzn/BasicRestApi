const { getCollection } = require('./connection');

async function findOne(collectionName, query, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.findOne(query, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l\'exécution de la fonction findOne avec les paramètres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}

async function find(collectionName, query, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.find(query, options).toArray();
        return result;
    } catch (e) {
        console.log(`Erreur lors de l\'exécution de la fonction find avec les paramètres suivants: ${query}`);
        console.log(e);
        throw e;
    }
}

async function insertOne(collectionName, document, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertOne(document, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l\'exécution de la fonction insertOne avec les paramètres suivants: ${document}`);
        console.log(e);
        throw e;
    }
}

async function insertMany(collectionName, documents, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertMany(documents, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l\'exécution de la fonction insertMany avec les paramètres suivants: ${documents}`);
        console.log(e);
        throw e;
    }
}

async function updateOne(collectionName, filter, update, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateOne(filter, update, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l\'exécution de la fonction updateOne avec les paramètres suivants: ${filter}`);
        console.log(e);
        throw e;
    }
}

async function updateMany(collectionName, filter, update, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateMany(filter, update, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l\'exécution de la fonction updateMany avec les paramètres suivants: ${filter}`);
        console.log(e);
        throw e;
    }
}

async function replace(collectionName, filter, replacement, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.replaceOne(filter, replacement, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l\'exécution de la fonction replaceOne avec les paramètres suivants: ${filter}`);
        console.log(e);
        throw e;
    }
}

async function deleteOne(collectionName, filter, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteOne(filter, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l\'exécution de la fonction deleteOne avec les paramètres suivants: ${filter}`);
        console.log(e);
        throw e;
    }
}

async function deleteMany(collectionName, filter, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteMany(filter, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l\'exécution de la fonction deleteMany avec les paramètres suivants: ${filter}`);
        console.log(e);
        throw e;
    }
}