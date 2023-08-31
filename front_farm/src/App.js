import './App.css';
import { AuthProvider } from './Context';
import NavBar from './components/Navbar/Navbar';
import Routes from "./pages/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
<AuthProvider>
  <Router>
    <NavBar/>
    <Routes/>
  </Router>
</AuthProvider>
  );
}

export default App;
