import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.scss';

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Graph from "./components/graph.component";
// import ExercisesList from "./components/exercises-list.component";
// import EditExercises from "./components/edit-exercises.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="constrain">
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/graph" exact component={Graph} />
        {/* <Route path="/edit/:id" exact component={EditExercises} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} /> */}
      </div>
    </Router>
  );
}

export default App;
