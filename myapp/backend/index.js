const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();


dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(
	cors({
		origin: [
			"https://rakt-dhara-vz7r.vercel.app/",
		],
		credentials: true,
	})
);
app.use(cors());

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
	console.log(e ? e : "Connected successfully to database");
});


app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
app.listen(process.env.PORT, () =>
	console.log(`Server running at http://localhost:${process.env.PORT}`)
);