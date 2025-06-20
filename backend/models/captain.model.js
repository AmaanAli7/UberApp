const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const captainSchema= new mongoose.Schema({
    fullname:{
        firstname:{
        type:String,
        required:true,
        minlength:[3,'Firstname atleast 3 char.']
    },
    lastname:{
        type:String,
        minlength:[3,'Lastname must be at least 3 char long'],
    }
},
email:{
    type:String,
    required:true,
    unique:true,
    match:[/^|S+@\S+\.\S+$/,'please enter a valid email']
},
password:{
    type:String,
    required:true,
    select:false,
},
socketId:{
    type:String,
},
status:{
    type:String,
    enum:['active','inactive'],
    default:'inactive',
},
vehicle:{
    color:{
        type:String,
        required:true,
        minlength:[3,'min length 3'],
    },
    plate:{
        type:String,
        required:true,
        minlength:[3,'min length 3'],
    },
    capacity:{
        type:String,
        required:true,
        minlength:[1,'min length 1'],
    },
    vehicleType:{
        type:String,
        required:true,
        enum:['car','motorcycle','auto']
    }
},
location:{
    ltd:{
        type:Number,
    },
    lng:{
        type:Number,
    }
}
})

captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{ expiresIn:'24h'})
    return token;
}

captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password, 10);
}


const captainModel= mongoose.model('captain',captainSchema)

module.exports=captainModel;