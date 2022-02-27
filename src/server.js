require("./db/connection");
const express = require("express");
const cors = require("cors");
const agentRouter = require("./agent/agentRoutes");
const app = express();
const port = 5005;

app.use(express.json());
app.use(cors());

app.use(agentRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});