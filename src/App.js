import { Route, Switch } from "react-router"
import "./App.css"
import Homepage from "./pages/homepage/Homepage"
import { ROUTE_NAMES } from "./constants/routes"
import Shop from "./pages/shop/Shop"

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
        <Route name={ROUTE_NAMES.SHOP} path="/shop" component={Shop} />
      </Switch>
    </div>
  )
}

export default App
