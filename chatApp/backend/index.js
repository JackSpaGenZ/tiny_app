const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: true }));
//body dang la object rong ===============> usernam
app.post("/authenticate", async (req, res)=>{
    console.log('test request!Q')
    const {username} = req.body;
    console.log('req.body ', req.body)
    return res.json({username : username, secret : "dat..."});
});     

app.listen(3001);
