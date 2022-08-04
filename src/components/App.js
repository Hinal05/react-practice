import React from "react";
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from "../components/home/home";
import NotFound from "../components/notfound/notFound";
import Task2 from "../components/task2/task2";
import Task3 from "../components/task3/task3";
import Task4 from "../components/task4/task4";
import Search from "../components/search/search";
import Task5Lifting from "./task5/task5Lifting";
import Lifting from "./lifting/lifting";

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
                <NavLink to="/task5Lifting" className="nav-link">Task5Lifting</NavLink>
                <NavLink to="/lifting" className="nav-link">Lifting</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/task2" exact element={<Task2/>} />
          <Route path="/task3" exact element={<Task3/>} />
          <Route path="/task4" exact element={<Task4/>} />
          <Route path="/search" exact element={<Search/>} />
          <Route path="/task5Lifting" exact element={<Task5Lifting/>} />
          <Route path="/lifting" exact element={<Lifting/>} />
          <Route path="/" exact element={<Home/>} />
          <Route element={NotFound} />
        </Routes>
      </Router>
    </section>
  )
}

export default App;