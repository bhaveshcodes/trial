const { MongoClient } = require('mongodb')
const env =require('dotenv').config() 
// env
 
let dbConnection
// let uri="mongodb+srv://mongoDB1:uE85CDXAgVnjzu1d@cluster0.i0bhhlu.mongodb.net/?retryWrites=true&w=majority"
const uri = "mongodb+srv://mongouser_bhavesh:xqSXyvoc2Fu5dZOw@courses-project-db-clus.pcfvfmr.mongodb.net/sample_mflix?retryWrites=true&w=majority";

 

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
