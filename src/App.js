import './App.css';
import Navbar from "./components/Navbar"
import Mainpage from "./components/Mainpage"
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainpage />
      <Route path='/group' Component={GroupPage} />
    </div>
  );
}

export default App;
