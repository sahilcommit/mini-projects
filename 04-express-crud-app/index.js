const express=require("express");
const app=express();
let port=8080;
app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});
var methodOverride = require('method-override');

const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
const path=require("path");
app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine", "ejs");
// FIX: Correctly set the views directory.
app.set("views", path.join(__dirname, "/views"));


let fakeData =[
    { username:"sahil",
      content:"what is best way to play cricket ?",
      id:uuidv4(),
    },
    { username:"Joe Doe",
        content:"best south indian movie ?",
        id:uuidv4(),
      },
      { username:"Roman",
        content:"GTA 6 download link ?",
        id:uuidv4(),
      }

];
app.get("/posts",(req,res)=>{
    res.render("index",{fakeData});
});

app.get("/posts/new",(req,res)=>{
  res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
  let {username ,content}=req.body;
  console.log(req.body);
  let id=uuidv4();
  fakeData.push({username,content,id});
  res.redirect("/posts")
  
});
app.get("/posts/:id",(req,res)=>{
  let {id}=req.params;
  let post=fakeData.find((p)=>id==p.id);
  res.render("show.ejs",{post});
  console.log(post)

});
app.patch("/posts/:id",(req,res)=>{
  let {id}=req.params;
  let newcontent=req.body.content;
  let post=fakeData.find((p)=>id==p.id);
  post.content=newcontent;
  res.redirect("/posts")
  console.log("patch route work");
});
app.get("/posts/:id/edit",(req,res)=>{
  let {id}=req.params;
  let post=fakeData.find((p)=>id==p.id);
  res.render("edit.ejs",{post});
});
app.delete("/posts/:id",(req,res)=>{
  let {id}=req.params;
  fakeData=fakeData.filter((p)=>id!==p.id);
  res.redirect("/posts");
  
});


