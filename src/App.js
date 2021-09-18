import { Route, Switch } from "react-router"
import "./App.css"
import Homepage from "./pages/homepage/Homepage"
import Shop from "./pages/shop/Shop"
import Header from "./components/header/Header"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  )
}

export default App
