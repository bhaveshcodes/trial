import express from "express";

const app = express();

const port = 9000;

app.use("/ok", (req, res) => {
  res.json({ message: "Hello Vercel" });
  
});

app.listen(9000, () => {
  console.log(`Server is running on Port ${port}`);
});


app.use('/', (req, res) => {
   
    // let blogs = []
    //  db.collection('blogs')
    //     .find()
    //     .sort({ _id: -1 })
    //     .forEach(blog => blogs.push(blog))
    //     .then(() => {
             
    //         res.json(blogs)
             
          
    //     })
    //     .catch((err) => {
    //          res.status(500).json({ error: 'could not get data' })
    //     })

    res.json("hi!")
})
