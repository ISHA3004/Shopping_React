const conn = require('./connection')
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(express.json());
app.use(cors());

app.post('/post', async (req, res) => {
  
  var {fname,lname,email,telnum,mess} = req.body;
  conn.connect((err)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      console.log("connected");
      var sql = "INSERT INTO contact_details(fname,lname,email,telnum,mess) VALUES(?,?,?,?,?)";
      conn.query(sql,[fname,lname,email,telnum,mess],(err)=>{
        if(err)
          console.log(err);
        else
          console.log("insertion executed");
      })
    }
  })


  res.send({status:"ok"});
})

app.post('/data',(req,res)=>{
  conn.connect((err)=>{
    if(err)
    {
      console.log(err)
    }
    else
    {
      console.log("connected");
      var sql = "SELECT * from data_items";
      conn.query(sql,(err,result)=>{
        if(err)
        {
          console.log(err)
        }
        else
        {
          //var result = {result}
          res.send(result);
        }
      })
    }
    
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



