import { RouterProvider } from "react-router-dom"
import Router from "./routes/Routes"


const App = () => {
  return (
    <div>

    <RouterProvider router={Router} />
    </div>
  )
}

export default App
