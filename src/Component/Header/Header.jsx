import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchFrom from "../SearchForm/SearchFrom";
import "./Header.css";

const Header = () => {
  return (
    <div className="h-container">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find ur Book Of Choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            A library is a repository of knowledge and information, typically
            organized and maintained for public access or specialized use. It
            serves as a vital resource for education, research, and leisure,
            offering a wide range of materials such as books, magazines,
            newspapers, audio recordings, videos, and digital resources.
          </p>
          <SearchFrom />
        </div>
      </header>
    </div>
  );
};

export default Header;
