import express from "express";
import path from 'path';
import helmet from "helmet";
import cors from "cors";
import compress from "compression";

const app = express();
app.use(compress());
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self "],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "*.amazonaws.com"]
  }
}));

app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

app.use(cors());

const root = path.join(__dirname, "../../");

app.use("/", express.static(path.join(root, "/frontend/build")));
app.use('/uploads', express.static(path.join(root, 'uploads')));


app.get('/', (req, res) => {
  res.sendFile(path.join(root, "frontend/build/index.html"));
});

app.listen(8000, () => console.log("Listening on port 8000"));