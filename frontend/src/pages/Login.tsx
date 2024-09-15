import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[error,setError]=useState(false)
    const navigate=useNavigate()


    async function  handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(!email || !password){
             throw new Error("please fill in all the required")
             return;
        }
       
        try{
        const response = await axios.post("http://localhost:4000/api/v1/Login",{email,password})
        const{token} =  response.data
        const status =  response.status

        console.log(token)
        console.log(status)

        if(status === 200){
            try{
                localStorage.setItem("token",token)
                navigate("/dashboard")
            }catch(err){
                console.error(err)
            }
        }else{
            setError(true)
        }
    }catch(err){
        setError(true)
    }
    }


    

  return (
    <div className="w-screen h-screen flex justify-center items-center">

        <form onSubmit={handleSubmit}>
            <div>
                <p>Enter email</p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full h-5 " type="email" name="email" />
            </div>

            
            <div>
                <p>Enter password</p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full h-5 " type="password" name="password"/>
            </div>
            <div>
                <button type="submit">login</button>
            </div>
        </form>

    </div>
  )
}

export default Login