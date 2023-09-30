import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import "./App.css";

function App() {
  return (
    <div>
      <p>child-react</p>

      <BrowserRouter basename="/react">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        <Switch>
          <Route path="/" exact render={() => <p>Home页面</p>}></Route>
          <Route path="/about" component={About}></Route>
          {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
