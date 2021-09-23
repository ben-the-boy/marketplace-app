import './App.css';
import ItemsContainer from './containers/ItemsContainer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={ItemsContainer} />
      </div>
    </Router>
  );
}

export default App;
