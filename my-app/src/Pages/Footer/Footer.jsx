import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p>&copy; 2024 E-Shop. All Rights Reserved.</p>
        <p>
          <a href="/terms" className="text-white me-2">Terms of Service</a>|
          <a href="/privacy" className="text-white ms-2">Privacy Policy</a>
        </p>
        <p>
          <a href="/facebook" className="text-white me-3"><i className="bi bi-facebook"></i></a>
          <a href="/twitter" className="text-white me-3"><i className="bi bi-twitter"></i></a>
          <a href="/instagram" className="text-white"><i className="bi bi-instagram"></i></a>
        </p>
      </div>
    </footer>
  );
}
