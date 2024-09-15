import express from "express"
import { createJob,getAllJobs,updateJob,deleteJob,getOneJob } from "../controllers/jobsController"


const router = express.Router()

router.route("/").post(createJob).get(getAllJobs)
router.route("/:id").post(updateJob).delete(deleteJob).get(getOneJob)

export default router