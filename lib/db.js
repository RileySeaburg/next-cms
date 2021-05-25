import { MongoClient } from 'mongodb'

async function connectDB() {
    const client = await MongoClient.connect('mongodb://localhost:27017/next-cms')

    return client
}

export default connectDB