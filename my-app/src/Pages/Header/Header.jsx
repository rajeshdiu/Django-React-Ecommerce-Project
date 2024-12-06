import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  // Ensure Bootstrap Icons is imported
import './Header.css'; // Custom styling (if needed)

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h3 className="text-light custom-brand">E-Shop</h3>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/cart">
                <i className="bi bi-cart-fill custom-cart-icon"></i>
              </Link>
            </li>
            {/* Search bar in navbar */}
            <li className="nav-item">
              <form className="d-flex">
                <input 
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search" 
                />
                <button className="btn btn-outline-light" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </li>
            {/* User Profile dropdown */}
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle custom-link" 
                to="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i> Profile
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
                <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
              </ul>
            </li>
            {/* Additional categories dropdown */}
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle custom-link" 
                to="#" 
                id="categoryDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-list"></i> Categories
              </Link>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li><Link className="dropdown-item" to="/category/electronics">Electronics</Link></li>
                <li><Link className="dropdown-item" to="/category/fashion">Fashion</Link></li>
                <li><Link className="dropdown-item" to="/category/home">Home</Link></li>
                <li><Link className="dropdown-item" to="/category/sports">Sports</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
