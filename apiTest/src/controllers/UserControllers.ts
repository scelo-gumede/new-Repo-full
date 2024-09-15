import User from "../models/authMOdel"



export const Register = async (req,res)=>{
    const person = await User.create(req.body)
    const token = person.createJWT()
    res.status(201).json({token})
}


export const Login = async (req,res)=>{
    const{password,email}= req.body

    if(!password || !email){
        throw new Error("please enter all that required")
    }

    const user = await User.findOne({email})
    if(!user){
        throw new Error("user not found")
    }

    const compare = await user.comparePass(password)

    if(!compare){
        throw new Error("password not the same")
    }

    const token = user.createJWT()

    res.status(200).json({token})

}

