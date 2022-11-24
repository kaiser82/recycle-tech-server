const express = require('express');
const cors = require('cors');



const port = process.env.PORT || 5000;

const app = express();

// middle ware
app.use(cors());
app.use(express.json());


async function run() {
    try {

    }
    finally {

    }
}
run().catch(console.log)

app.get('/', async (req, res) => {
    res.send("recycleTech server is running")
});

app.listen(port, () => {
    console.log(`RecycleTech is running on port: ${port}`)
})