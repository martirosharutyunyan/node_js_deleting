const express = require('express');
const deleteAll = require('./deleting');
deleteAll();
const app = express();
const port  = 3000;
app.listen(()=>console.log(`shef jan servery miacel e ${port}-i vra`))