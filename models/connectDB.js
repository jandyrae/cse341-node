const dotenv = require("dotenv");
dotenv.config();

const {
    MongoClient,
    ServerApiVersion
} = require("mongodb");

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
async function connectDB() {
    client.connect((err) => {
        // perform actions on the collection object
        const database = client.db(process.env.DB_NAME);
        const contacts = database.collection("contacts");
        console.log(contacts.collectionName)
       
        console.log("db connecting...");
       
        // client.close();
    });
    try {
        await client.connect();
        console.log("DB is connected")
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

module.exports = {
    connectDB,
};