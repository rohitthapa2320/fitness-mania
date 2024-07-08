import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
  return (
    <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App;