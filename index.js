// from delete (Local File Reference)
const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser');

const cors = require('cors')
app.use(cors({
    origin: "*",
}))

//mongodb
const { connectToDb, getDb } = require('./db')
const { ObjectId } = require('mongodb')

// db connection
let db
connectToDb((err) => {
    if (!err) {
        const PORT = process.env.PORT || 9000
        app.listen(PORT, () => {
            console.log("running on port 9000");
        })
        db = getDb()
    }
})



const port = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


// app.listen(9000, () => {

//     console.log(`Server is running on Port ${port}`);
// });

app.get("/", (req, res) => {
    console.log("here");

    let blogs = []
    db.collection('comments')
        .find()
        .sort({ _id: -1 })
        .forEach(blog => blogs.push(blog))
        .then((response) => {
            console.log("in .then response");
            res.json(blogs)
            console.log(blogs);
            // res.render('index', { articles: blogs })
        })
        .catch((err) => {
            // res.status(500).json({ error: 'could not get data' })
        })

    // fetch1()
    // async function fetch1() {
    //     // const result = await axios('https://randomuser.me/api/')
    //     // console.log("result2");
    //     fetch('https://randomuser.me/api/')
    //         .then((response) => response.json())
    //         .then((data) => res.send(data));
    // }

    //   res.json({ message: "result" });
});


app.get("/api", (req, res) => {
    console.log("here");

    let blogs = []
    db.collection('comments')
        .find()
        .sort({ _id: -1 })
        .forEach(blog => blogs.push(blog))
        .then((response) => {
            console.log("in .then response");
            res.json(blogs)
            console.log(blogs);
            // res.render('index', { articles: blogs })
        })
        .catch((err) => {
            // res.status(500).json({ error: 'could not get data' })
        })

    // fetch1()
    // async function fetch1() {
    //     // const result = await axios('https://randomuser.me/api/')
    //     // console.log("result2");
    //     fetch('https://randomuser.me/api/')
    //         .then((response) => response.json())
    //         .then((data) => res.send(data));
    // }

    //   res.json({ message: "result" });
});
