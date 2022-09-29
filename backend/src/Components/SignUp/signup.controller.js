const Signup = require("./signup.model");

exports.signup = async (req, res) => {
  let { email } = req.body;

  try {
    let user = await Signup.findOne({ email });
    if (user) {
      return res
        .status(404)
        .send(
          "Cannot create a User with existing Email, Please try another one"
        );
    }
    let createUser = await Signup.create(req.body);
    res.send({ token: `${createUser.id}:${createUser.email}:${Date.now()}` });
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};
