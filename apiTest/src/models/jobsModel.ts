import mongoose,{Document,Schema} from "mongoose";


interface Jobs extends Document{
    company:string,
    ceo:string,
    role:string,
    salary:number,
    createdAt?:Date,
    updatedAt?:Date
}

const JobsSchema = new Schema<Jobs>({
    company:{
        type:String,
        required:true,
        enum:["wits","coca-cola"]
    },
    ceo:String,
    role:String,
    salary:Number,
   
},{timestamps:true})


export default mongoose.model("job",JobsSchema)