const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = axios.put(
            'http://api.chategine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username
            },
            { header: { "private-key": "92235d29-1983-4027-b8c7-780a499f5571" } },
    )
    return res.status(r.status).json.apply(r.data)
} catch (e) {
    return res.status(e.response.status).json.apply(e.response.data);

}

});

app.listen(3001);