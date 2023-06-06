import "./App.css";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import GroupPage from "./components/GroupPage";
import Discography from "./components/Discography"; 

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Link to="H"
//       </div>
//     )
//   }
// ])

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/discog" element={<Discography />} />
      </Routes>
      <Footer />
      

      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
