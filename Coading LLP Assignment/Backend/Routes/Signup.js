const router = require("express").Router();
const SignupSchema = require("../Models/signup");

// import bcrypt to use password in coaded form
const bcrypt = require("bcryptjs");

//Import jsonwebtoken to genrate token
const jwt = require("jsonwebtoken");

// get request for signup user
router.get("/", async (req, res) => {
  try {
    const user = await SignupSchema.find();
    res.json(user);
  } catch (error) {
    res.json({ masssge: error });
  }
});

// post request for signup user
router.post("/signup", async (req, res) => {
  //Mobile Number already Exists
  const mobileExists = await SignupSchema.findOne({ mobile: req.body.mobile });
  if (mobileExists) return res.status(400).send("Mobile Already Exists");

  //Email already Exists
  const emailExists = await SignupSchema.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already Exists");

  //Hash Password or Bcrypt Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Creat a new user

  const user = SignupSchema({
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    password: hashPassword,
    isActive: true,
    createdBy: req.body.email,
    createdOn: Date.now(),
    updatedBy: null,
    updatedOn: null,
  });

  try {
    const data = await user.save();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// User Signin
router.post("/signin", async (req, res) => {
  // checking the user email Id
  const email = await SignupSchema.findOne({ email: req.body.email });
  if (!email) return res.status(400).send("Email Not Registered");

  //checking password
  const validpass = await bcrypt.compare(req.body.password, email.password);
  if (!validpass) return res.status(400).send("Invalid Password");

  // ceat and assign a token
  const token = jwt.sign({ _id: email._id }, process.env.SECRET_TOKEN);
  const id = email._id;
  const userName = email.email;
  const name = email.name;
  const mobileNo = email.mobile;
  const isActive = email.isActive;
  res
    .header("auth-token", token)
    .send({
      token: token,
      _id: id,
      userName: userName,
      name: name,
      mobileNo: mobileNo,
      isActive: isActive,
    });
});

// export Router
module.exports = router;
