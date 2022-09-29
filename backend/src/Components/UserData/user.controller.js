const User = require("./user.model");

exports.signup = async (req, res) => {
  let { email } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(404)
        .send(
          "Cannot create a User with existing Email, Please try another one"
        );
    }
    let createUser = await User.create(req.body);
    res.send({ token: `${createUser.id}:${createUser.email}:${Date.now()}` });
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};

exports.login = async (req, res) => {
  let { email } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .send("Authentication failed, Please Enter valid Email-ID");
    }
    res.send({
      token: `${user.id}:${user.email}`,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
