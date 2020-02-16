// to set up dev env variables in  separate file .env
// require("dotenv").config();
const express = require("express");
// const expressFormidable = require("express-formidable");
// to authorize access to other ports
const cors = require("cors");

const app = express();
app.use(cors());
// app.use(expressFormidable());

// to return a json with the list of finds
// app.post("/offers", async (req, res) => {
//   const { category, location, query, page } = req.fields; // category is a number, location is a [{zipcode: "zipcode"}], query is a string and page is the number
//   const leboncoin = require("leboncoin-api");
//   try {
//     const list = await new leboncoin.Search()
//       .setLocation(location)
//       .setQuery(query)
//       .setPage(page)
//       .setCategory(category)
//       .run();
//     res.json(list);
//   } catch (err) {
//     console.log(err);
//   }
// });

app.get("/", (req, res) => {
  res.json("Hello !");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server has started");
});
