import './App.css';
import NavBar from './components/Navbar/Navbar';
import Routes from "./pages/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    
    <Router>
<Routes/>
<NavBar/>
</Router>
  );
}

export default App;
