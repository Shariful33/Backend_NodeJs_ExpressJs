const express = require('express');
const app = express();

app.use(express.json());

let blogPosts =  [];
let currentId = 1;

class createPost{
    constructor(title,content,author){
        this.id = currentId++;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date().toISOString();
    }
}

app.post("/posts",(req,res)=>{
    console.log(req.url, req.method);
    const {title,content,author} = req.body;

    if(!title || !content || !author){
        return res.status(400).json({error: "Title,content,author are required."});
    }
    if(title.length<3){
        return res.status(400).json({error:"Title must be at least 3 characters long."});
    }
    if(content.length<10){
        return res.status(400).json({error:"Content must be at least 10 characters long"});
    }
    
    const newPost = new createPost(title,content,author);
    blogPosts.push(newPost);

    return res.status(201).json({
        message : "Blog post created successfully",
        post : newPost
    });
});


app.get("/posts/:id", (req,res)=>{
    console.log(req.url, req.method);
    const id = parseInt(req.params.id);
    const post = blogPosts.find((p)=> p.id === id);
    
    if(!post){
        return res.status(404).json({error: "Blog post not found"});
    }

    return res.status(200).json(post);
});

app.listen(3000,()=>{
    console.log(`server started at port no 3000`);
});