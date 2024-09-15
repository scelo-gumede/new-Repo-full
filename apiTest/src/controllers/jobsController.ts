import Jobs from "../models/jobsModel"

export const createJob = async(req,res)=>{
    const job = await Jobs.create(req.body)
    res.status(201).json({msg:"job created",
        job
    })
}

export const getAllJobs = async (req,res)=>{
    const jobs = await Jobs.find({})

    res.status(200).json({data:jobs})
}

export const updateJob = async (req,res)=>{
    const jobUpdated = await Jobs.findByIdAndUpdate({_id:req.params.id},req.body,{
        new:true,
        runValidators:true
    })

    if(!jobUpdated){
        throw new Error("no such job found")
    }

    res.status(201).json({updated:jobUpdated})

}

export const deleteJob = async (req,res)=>{
    const deleted = await Jobs.findByIdAndDelete(req.params.id)

    if(!deleted){
        throw new Error("no such job found")
    }

    res.status(201).json({deleted})

}

export const getOneJob = async (req,res)=>{
    const oneJob = await Jobs.findById(req.params.id)

    if(!oneJob){
        throw new Error("no such job found")
    }

    res.status(201).json({oneJob})

}