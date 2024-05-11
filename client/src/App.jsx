
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';
import { Logout } from './pages/Logout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminLayout from './components/layouts/AdminLayout';
import AdminContacts from './pages/AdminContacts';
import AdminUsers from './pages/AdminUsers';
import AdminUpdate from './pages/AdminUpdate';


function App() {


  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
       
        <Route path="/admin" element={<AdminLayout />}>
          <Route  path="users" element={<AdminUsers />} />
          <Route  path="contacts" element={<AdminContacts />} />
          <Route  path="users/:id/edit" element={<AdminUpdate />} />
          
        </Route>
      </Routes>
      <Footer />
    </Router >
    </>
  );
}

export default App;
