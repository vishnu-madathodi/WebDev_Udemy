import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();  //"August 23, 2025 01:15:00" add this to test for weekend.
  const day = today.getDay();
  let dayType = "";
  let activity = "";
  if (day === 0 || day === 6) {
    dayType = "Weekend";
    activity = "have fun";
  } else {
    dayType = "Weekday";
    activity = "work hard";
  }
  res.render(`${__dirname}/views/index.ejs`, {
    dayType: dayType,
    activity: activity
  });
});

app.listen(port, () => {
  console.log(`App is listening on the port: ${port}`);
});
