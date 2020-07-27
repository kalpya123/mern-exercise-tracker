import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.components";
import ExercisesList from "./components/exercises-list.components";
import EditExercises from "./components/edit-exercises.components";
import CreateExercises from "./components/create-exercises.components";
import CreateUser from "./components/create-user.components";



//url path
function App() {
  return (
    <Router>
      <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={ExercisesList}/>
    <Route path="/edit/:id" component={EditExercises}/>
    <Route path="/create" component={CreateExercises}/>
    <Route path="/user" component={CreateUser}/>
    </div>
    </Router>
  );
}

export default App;
