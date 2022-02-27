const { Router } = require("express");
const { addAgent, findAgent, updateAgent, deleteAgent, login , } = require("./agentControllers");
const { hashPassword } = require("../middleware");
const agentRouter = Router();

agentRouter.post("/agent", hashPassword, addAgent);
agentRouter.get("/agent", findAgent);
agentRouter.put("/agent", updateAgent);
agentRouter.delete("/agent", deleteAgent);

agentRouter.post("/signIn", login);


module.exports = agentRouter;