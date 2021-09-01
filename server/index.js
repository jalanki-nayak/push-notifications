const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/lists", async (req, res)=>{
    try {
        const totalList = await pool.query("SELECT * FROM notificationlist");
        res.json(totalList.rows)
    } catch (error) {
        console.error(error.message);
    }
})
app.get("/list/:id", async (req, res)=> {
    try {
        const user = await pool.query(`SELECT * FROM notificationlist WHERE id = ${req.params.id}`);
        res.json(user.rows);
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(5000,()=>{
    console.log("running successfully");
});