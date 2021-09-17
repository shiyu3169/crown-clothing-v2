import { Route } from "react-router"
import "./App.css"
import Homepage from "./pages/homepage/Homepage"
import { ROUTE_NAMES } from "./constants/routes"

function App() {
  return (
    <div>
      <Route exact name={ROUTE_NAMES.HOMEPAGE} path="/" component={Homepage} />
    </div>
  )
}

export default App
