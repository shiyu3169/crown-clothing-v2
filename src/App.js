import { Route, Switch } from "react-router"
import "./App.css"
import Homepage from "./pages/homepage/Homepage"
import { ROUTE_NAMES } from "./constants/routes"

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          name={ROUTE_NAMES.HOMEPAGE}
          path="/"
          component={Homepage}
        />
        {/* <Route path="/shop/hats" component={} /> */}
      </Switch>
    </div>
  )
}

export default App
