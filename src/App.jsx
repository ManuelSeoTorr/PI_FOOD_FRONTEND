import { LandingPage, Home, Detail, Form, About } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/create" component={Form} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
