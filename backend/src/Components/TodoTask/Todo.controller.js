const Todo = require("./Todo.model");

exports.Todoget=async (req, res) =>{
   try {
    
   }
   catch(err){

   }
}

exports.Todopatch = async(req, res)=>{
    res.send("patch")
}

exports.Todopost = async(req,res)=>{
    const newTodo = new Todo(req.body);

    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({
                message : err.message,
            });
        }
        else {
            res.status(201).json({
                message: "Create a new Todo successfuly"
            })
        }
    })
    
}

exports.Tododelete = async(req,res)=>{
    res.send("Delete");
}