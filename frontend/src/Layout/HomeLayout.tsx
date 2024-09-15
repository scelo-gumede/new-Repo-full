import { NavLink, Outlet } from "react-router-dom"



const HomeLayout = () => {
  return (
    <div>
        <nav className="flex justify-around p-5 bg-slate-500 text-red-800">
            <p><NavLink to={"authenticate"}>Login</NavLink></p>
            <p><NavLink to={"authenticate/register"}>Register</NavLink></p>
        </nav>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default HomeLayout