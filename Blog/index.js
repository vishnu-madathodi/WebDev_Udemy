import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

var posts = [];
class Post {
  constructor(heading, description) {
    this.id = posts.length + 1;
    this.heading = heading;
    this.description = description;
  }
}

function selectObject(id) {
  return posts.find((p) => p.id == id);
}

function editObject(id, heading, description) {
  let found = posts.find((p) => p.id == id);
  if (found) {
    found.heading = heading;
    found.description = description;
  }
}

function deleteObject(id) {
  posts = posts.filter((p) => p.id != id);
}

app.get("/", (req, res) => {
  res.render("home.ejs", {
    posts: posts,
  });
});

app.get("/add", (req, res) => {
  res.render("modPost.ejs", {
    headingText: "Add a new blog post",
    methodType: "add",
  });
});

app.post("/add", (req, res) => {
  var post = new Post(req.body["title"], req.body["description"]);
  posts.push(post);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  let selectedPost = selectObject(id);
  res.render("modPost.ejs", {
    headingText: "Edit a your blog post",
    methodType: "edit",
    id: id,
    selectedHeading: selectedPost.heading,
    selectedDesc: selectedPost.description,
  });
});

app.post("/edit/:id", (req, res) => {
  let id = req.params.id;
  editObject(id, req.body["title"], req.body["description"]);
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  let id = req.params.id;
  deleteObject(id);
  res.redirect("/");
});

app.listen(port, (req, res) => {
  console.log(`App listening on the port: ${port}`);
});
