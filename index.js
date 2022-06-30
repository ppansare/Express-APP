const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get ('/', (req, res)=>{
  res.render("home")
});

app.get('/books', async function (req, res){

  let response = await fetch(`https://fakerapi.it/api/v1/books?_quantity=1`);
  let data = await response.json();
  console.log(data)

   res.render('book', {"title":data.data[0].title,"author":data.data[0].author, "genre":data.data[0].genre, "description":data.data[0].description, "isbn":data.data[0].isbn, "image":data.data[0].image, "published":data.data[0], "publisher":data.data[0],})
})

app.get('/texts', async function (req, res){

  let response = await fetch(`https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500`); 

  let data = await response.json();
  console.log(data)
  res.render('texts', {"title":data.data[0].title, "author":data.data[0].author, "genre":data.data[0].genre,"content":data.data[0].content,})
  
});

app.get('/creditcards', async function (req, res){
  let response = await fetch(`https://fakerapi.it/api/v1/credit_cards?_quantity=1`);
  
  let data = await response.json();
  console.log(data)
  res.render('creditcards',{"type":data.data[0].type,   
  "number":data.data[0].number, 
  "expiration":data.data[0].expiration, 
  "owner":data.data[0].owner, })
});

app.listen(3000, () => {
   console.log('server started');
});


