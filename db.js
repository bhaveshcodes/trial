const { MongoClient } = require('mongodb')
const env =require('dotenv').config() 
// env
 
let dbConnection
let uri="mongodb+srv://mongouser_bhavesh:xqSXyvoc2Fu5dZOw@courses-project-db-clus.pcfvfmr.mongodb.net/?retryWrites=true&w=majority"

 

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
              
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection

}
