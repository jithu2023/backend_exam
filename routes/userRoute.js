const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const responseData = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(responseData.data); 
    res.json(responseData.data); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
