import { BrowserRouter as Router, Route, Switch, Redirect,  Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import List from "./pages/list";

function App() {
  return (
    <div className="App">
      <span>app-react</span>
      <Router
        basename="/app-react"
        // basename={window.__POWERED_BY_QIANKUN__ ? "/app-react" : "/"}
      >
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Redirect to="/home/" />
        </Switch>

        <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/list">list</Link>
        </li>
      </ul>
      </Router>

      
    </div>
  );
}

export default App;
