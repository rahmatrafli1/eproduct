import "dotenv/config";
import express from "express";
import router from "./router/router.js";

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
