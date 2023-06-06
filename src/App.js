import './App.css';
import Navbar from "./components/Navbar"
import Mainpage from "./components/Mainpage"
import { Route, Routes } from 'react-router-dom';
import GroupPage from './components/GroupPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' component={Mainpage} />
      <Route path='/group' component={GroupPage} />
      </Routes>
    </div>
  );
}

export default App;
