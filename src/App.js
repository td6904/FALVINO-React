import "./App.css";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import GroupPage from "./components/GroupPage";
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
      </Routes>

      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
