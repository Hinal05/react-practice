import React from "react";
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from "../components/home/home";
import NotFound from "../components/notfound/notFound";
import Task2 from "../components/task2/task2";
import Task3 from "../components/task3/task3";
import Task4 from "../components/task4/task4";
import Search from "../components/search/search";
import Task5 from "./task5/task5";
import Lifting from "./lifting/lifting";
import Task6 from "../components/task6/task6";
import Context from "./context/context";
import InlineListing from "../components/inlineListing/inlineListing";

function App() {
  return (
    <section className="content-wrap">
       <Router>
        <Navbar expand="lg" fixed="top" bg="light">
          <Container>
            <Navbar.Brand href="#">Tasks</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              >
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/task2" className="nav-link">Task2</NavLink>
                <NavLink to="/task3" className="nav-link">Task3</NavLink>
                <NavLink to="/task4" className="nav-link">Task4</NavLink>
                <NavLink to="/search" className="nav-link">Search</NavLink>
                <NavLink to="/task5" className="nav-link">Task5</NavLink>
                <NavLink to="/lifting" className="nav-link">Lifting</NavLink>
                <NavLink to="/task6" className="nav-link">Task6</NavLink>
                <NavLink to="/context" className="nav-link">Context</NavLink>
                <NavLink to="/inlineListing" className="nav-link">InlineListing</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/task2" exact element={<Task2/>} />
          <Route path="/task3" exact element={<Task3/>} />
          <Route path="/task4" exact element={<Task4/>} />
          <Route path="/search" exact element={<Search/>} />
          <Route path="/task5" exact element={<Task5/>} />
          <Route path="/lifting" exact element={<Lifting/>} />
          <Route path="/task6" exact element={<Task6/>} />
          <Route path="/context" exact element={<Context/>} />
          <Route path="/inlineListing" exact element={<InlineListing/>} />
          <Route path="/" exact element={<Home/>} />
          <Route element={NotFound} />
        </Routes>
      </Router>
    </section>
  )
}

export default App;