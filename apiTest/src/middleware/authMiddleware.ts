import jsonwebtoken from "jsonwebtoken"

 const jwt = jsonwebtoken

const auth = async (req,res,next)=>{

    const{authorization}=req.headers

    if(!authorization || !authorization.startsWith("Bearer ")){
        throw new Error("unauthenticated user: no Bearer")
    }

    const token = authorization.split(" ")[1]

    try{
        const decode= jwt.verify(token,process.env.JWT)
        const{name,userId}=decode
        req.user={name,userId}
        next()
    }catch(err){
        throw new Error("unauthenticated user: token invalid")
    }

}

export default auth