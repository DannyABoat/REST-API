const Agent = require("./agentModel");
const bcrypt = require("bcryptjs");

exports.addAgent = async (req, res) => {
    try{
        const newAgent = await Agent.create(req.body);
        res.status(200).send({agent: newAgent});
    } catch (error) {
        console.log("error");
        res.status(500).send({err: error.message});
    }
};


exports.findAgent = async (req,res) => {
    try{
        const returnedAgent = await Agent.find({username: req.body.username});
        res.status(200).send({ returnedAgent });
    } catch (error) {
        console.log(error);
        res.status(404).send({error: "Unable to locate agent"});
    }
};

exports.updateAgent = async (req, res) => {
    try {
        if (req.body.newPassword) {
            let updatedAgent = await Agent.findOneAndUpdate(
                { username: req.body.username },
                { password: req.body.newPassword },
                { new: true }
            );
            res.status(200).send({
                message: `Agent ${updatedAgent.username} updated with new password.`,
            });
        } else if (req.body.newEmail) {
            let updatedAgent = await Agent.findOneAndUpdate(
                { username: req.body.username },
                { email: req.body.newEmail },
                { new: true }
            );
            res.status(200).send({
                message: `Agent ${updatedAgent.username} updated with new email address.`,
            });
        } else if (req.body.newUsername) {
            let updatedAgent = await Agent.findOneAndUpdate(
                { username: req.body.username },
                { username: req.body.newUsername },
                { new: true }
            );
            res.status(200).send({
                message: `Agent ${updatedAgent.username} updated with new username.`,
            });
        } else {
            res.status(404).send({
                error: "Cannot find the specified agent to update.",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};


  exports.deleteAgent = async (req, res) => {
      try {
          const deletedAgent = await Agent.findOneAndDelete({
              username: req.body.username,
          });
          res.status(200).send(`Agent ${deletedAgent.username} was deleted.`);
      } catch (error) {
          console.log(error);
          res.status(500).send({ error: error.message });
      }
  };


  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const newAgent = await Agent.findOne({ email });
      if (newAgent) {
        const validPassword = await bcrypt.compare(password, newAgent.password);
        if (validPassword) {
          res.status(200).send({message: "Login was successful"})
        } else {
          res.status(500).send({message: "Incorrect password"})
        }
      } else {
        res.status(500).send({message: "Entered wrong email"})
      }
    } catch (error) {
      console.log(error)
      res.status(500).send({error: error.message})
    }
  };