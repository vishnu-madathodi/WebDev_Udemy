const fs = require("fs");

fs.writeFile("message.txt", "Hello from MR Pool", (err) => {
  if (err) throw err;
  console.log("file updated");
});

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
