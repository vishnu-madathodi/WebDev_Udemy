import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let headingText = "";

app.get("/", (req, res) => {
  headingText = "Enter you name below 🪄";
  res.render("index.ejs", {
    headingText
  });
});

app.post("/submit", (req, res) => {
  let fNameCount = req.body["fName"].length;
  let lNameCount = req.body["lName"].length;
  if(fNameCount ===0 && lNameCount === 0){
    res.redirect("/");
    return;
  }
  headingText = `There are ${fNameCount + lNameCount} letters in your name.`;
  res.render("index.ejs", {
    headingText
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
