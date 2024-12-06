import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Header from './Pages/Header/Header'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const contacts = [
  {
    name: "Rajesh",
    number: "01484648",
    email: "rajesh@example.com",
    address: "Dhaka, Bangladesh",
    linkedin: "https://www.linkedin.com/in/rajesh",
    facebook: "https://www.facebook.com/rajesh"
  },
  {
    name: "khan",
    number: "68489489",
    email: "khan@example.com",
    address: "Chittagong, Bangladesh",
    linkedin: "https://www.linkedin.com/in/khan",
    facebook: "https://www.facebook.com/khan"
  },
];

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact elements={contacts} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
