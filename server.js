const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get('*',function(req, res){

    res.sendFile(path.join(__dirname,'./client/build/index.html'))
  });
 
  
//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/", router);
//port
const PORT = process.env.PORT || 8080;
const Pass = process.env.Pass;
//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "vanshgoel104203@gmail.com",
    pass: Pass,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
const email= ["8720163@gecnilokheri.ac.in"]
router.post("/contact", (req, res) => {
 // const name = req.body.name;
  //const email = req.body.email;
   
  const message = req.body.message; 
  const mail = {  
    from: "vanshgoel104203@gmail.com",
    bcc: email,
    subject: "BLOOD DONATION CAMP",
    html: `
           <p><h3>${message}</h3></p>
           `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
