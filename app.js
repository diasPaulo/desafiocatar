import express from "express";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;

const __dirname = path.resolve(path.dirname(""));
const URLBase = "https://worldcupjson.net";

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/getMatchs", async (req, res) => {
  const filePath = __dirname + "/public/matchs.json";

  fs.readFile(filePath, async function (err, dataRaw) {
    const data = JSON.parse(dataRaw);
    const tolerance = new Date(
      new Date().setMinutes(new Date().getMinutes() + 1)
    );

    if (new Date(data.last_update) <= tolerance) {
      const matchsRaw = await fetch(URLBase + "/matches/?by_date=ASC");
      const matchs = await matchsRaw.json();

      const body = {
        last_update: new Date(),
        data: matchs
      };

      fs.writeFile(filePath, JSON.stringify(body), (err) => {
        if (err) console.log(err);
      });
    }
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
