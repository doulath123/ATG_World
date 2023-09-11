import React from "react";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Header = () => {
  return (
    <div className="header-section">
      <div className=" d-lg-none">
        <div className="d-flex align-items-center justify-content-between px-4 py-3">
          <div>
            <AiOutlineArrowLeft className="fs-4 text-white"/>
          </div>
          <div>
            <button className="btn text-white border border-white cursor-pointer">
              Join Group
            </button>
          </div>
        </div>
      </div>
      <div className=" position-absolute top-50 start-0">
        <div className="container text-white header-info">
          <h2 className="">Computer Engineering</h2>
          <p className="">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
