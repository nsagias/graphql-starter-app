import express from "express";
import path from 'path';

const app = express();
const root = path.join(__dirname, "../../");

app.use("/", express.static(path.join(root, "/frontend/build")));
app.use('/uploads', express.static(path.join(root, 'uploads')));


app.get('/', (req, res) => {
  res.sendFile(path.join(root, "frontend/build/index.html"));
});

app.listen(8000, () => console.log("Listening on port 8000"));