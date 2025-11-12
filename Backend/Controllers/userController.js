const User = require('../model/user.model')


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.createUser  = async (req,res) =>{
    try{
        const {name,email,password} = req.body;
        
        const newUser = (await User.create({name,email,password}))
        res.status(201).json({
            status:'success',
            data:( newUser)
        });
    }catch(error){
        console.log(error);
    }
}

exports.getUserByID = async (req,res) =>{
    try{
        const userId = req.params.id;
        const user = await User.findById(userId);
        res.status(200).json({
            status:'success',
            data:user
        });
    }catch(error){
        console.log(error)
    }
}

exports.updateUser = async (req,res) =>{
    try{
        const userId = req.params.id;
        const updates = req.body
        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        res.status(200).json({
            status: 'success',
            data: user
        });
    }catch(error){
        console.log(error)
    }
}

exports.deleteUser= async (req,res) =>{
    try{    
        const delneeded = req.params.id;
        const user = await User.findByIdAndDelete(delneeded);
        res.status(200).json({
            status: 'success',
            data: user
        });
    }catch(error){
        console.log(error)
    }
}
