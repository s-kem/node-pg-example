const express = require("express")
const bodyParser = require("body-parser")
const db = require("./db")

const app = express();

app.use(bodyParser.json()) // parses json requests into req.body

app.post("/", (req, res) => {
  const data = req.body

  const saveResult = db.saveData(data)

  res.json(saveResult)
})

app.listen(3333, () => console.log("App listening on http://localhost:3333"))
