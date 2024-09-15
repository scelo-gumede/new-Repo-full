

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">

        <form>
            <div>
                <p>Enter email</p>
                <input className="w-full h-5 " type="email" name="email" />
            </div>

            <div>
                <p>name</p>
                <input className="w-full h-5 " type="email" name="email" />
            </div>

            <div>
                <p>location</p>
                <input className="w-full h-5 " type="email" name="email" />
            </div>
            
            <div>
                <p>Enter password</p>
                <input className="w-full h-5 " type="password" name="password"/>
            </div>
            <div>
                <button type="submit">login</button>
            </div>
        </form>

    </div>
  )
}

export default Register