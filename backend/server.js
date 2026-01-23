const express = require("express")

const PORT = 8080

const app = express()
app.get("/", (req, res)=>{
    res.send("This is Home Route Which is Working Fine, so please how to do this ? ")
})

app.listen(8080, ()=>{
    console.log(`Server Running on ${PORT}`)
})