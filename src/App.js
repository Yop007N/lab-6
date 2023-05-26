import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './NavBar'
import Task from "./Task";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Task />} />
          <Route exact path='/create' element={<CreateTask />} />
          <Route exact path='update/:id' element={<UpdateTask />} />
        </Routes>
      </div>
    </Router>
  );
}