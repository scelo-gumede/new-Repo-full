import mongoose,{Document,Schema} from "mongoose";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

const jwt = jsonwebtoken

interface User extends Document{
    name:string,
    email:string,
    password:string,
    location:string,
    comparePass(param:string):boolean,
    createJWT():string,
    timestamps:boolean
}

const UserSchema = new Schema<User>({
    name:{
        type:String,
        minlength:[5,"the name should have minimum of 5 characters"],
        required:true
    },
    email:String,
    password:String,
    location:String,

})


UserSchema.pre("save",async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
} )

UserSchema.methods.createJWT=function(){
    const token = jwt.sign({name:this.name,userId:this._id},process.env.JWT
        ,{expiresIn:"30d"})
    return token
}

UserSchema.methods.comparePass=function(passwordCompare){
    return bcrypt.compare(passwordCompare,this.password)
}


export default mongoose.model("user",UserSchema)