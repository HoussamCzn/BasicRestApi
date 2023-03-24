const { getCollection } = require('./connection');

const findOne = async (collectionName, query, options = {}) => {
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

const find = async (collectionName, query, options = {}) => {
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

const insertOne = async (collectionName, document, options = {}) => {
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

const insertMany = async (collectionName, documents, options = {}) => {
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

const updateOne = async (collectionName, filter, update, options = {}) => {
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

const updateMany = async (collectionName, filter, update, options = {}) => {
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

const replace = async (collectionName, filter, replacement, options = {}) => {
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

const deleteOne = async (collectionName, filter, options = {}) => {
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

const deleteMany = async (collectionName, filter, options = {}) => {
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

module.exports = {
    findOne,
    find,
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    replace,
    deleteOne,
    deleteMany
};