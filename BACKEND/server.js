require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/configs/dataBas");

connectToDB();

app.listen(3000, () => {
  console.log(`Server is lising on PORT - 3000`);
});
