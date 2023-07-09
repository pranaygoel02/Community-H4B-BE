const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const connectToDb = require("./mongoose/connectToDb");

const Routes = require("./routes/index");

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

(async () => {
  try {
    await connectToDb();
    
    app.use("/", Routes);

    app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
