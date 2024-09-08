const express=require('express')
const app=express()
const PORT=8000
const path = require('path');
const cors = require('cors');


// Middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json('Test')
})
const chk='production'

// Check if in production
if (chk === 'production') {
    // Serve static files from the frontend 'out' directory
    app.use(express.static(path.join(__dirname, '../testecom/out')));
  console.log(__dirname, '../testecom/out','tt',path.join(__dirname, '../testecom/out', 'index.html'));
  
    // Catch all route that sends back to the frontend index.html
    app.get('*', (req, res) => {
        
        console.log('productn',path.join(__dirname, '../testecom/out', 'index.html'));
        
    //   res.sendFile(path.join(__dirname, '../frontend/out'));
    res.sendFile(path.join(__dirname, '../testecom/out', 'index.html'));

    });
  } else {
    // For development mode, send a message
    app.get('*', (req, res) => {
        console.log('deploy');

      res.send('Development Mode: Run frontend separately.');
    });
  }



app.listen(PORT,(er)=>{console.log('success');console.log(er,'t');



})