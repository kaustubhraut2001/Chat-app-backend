import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 7000;
import router from "./Routes/index.js";
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    return res.send("It's working 🙌");
});
app.use("/api", router);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
