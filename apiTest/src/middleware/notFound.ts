

export const notFound = (req,res)=>{
    res.status(404).json({msg:"bad request as routes doesn't exist"})
}