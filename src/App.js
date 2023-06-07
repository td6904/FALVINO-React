import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/Mainpage";
import GroupPage from "./components/GroupPage";
import Discography from "./components/Discography"; 
import ContactPage from "./components/ContactPage";
import EventList from "./components/Event";

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

  const pageId = "100086291594451"

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/discog" element={<Discography />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventList pageId={pageId} />} />
      </Routes>
      <Footer />
      

      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
