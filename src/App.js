import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from "./parts/Landing";
import Portfolio from "./parts/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/portfolio" component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
