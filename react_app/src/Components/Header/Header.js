import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fagear } from '@fortawesome/free-solid-svg-icons'
import '../scss/Header.scss'
import { IoSettingsOutline } from "react-icons/io5";
import { FaSkyatlas } from "react-icons/fa";

const Header=() =>
{
  return (
    <>
    <section>
      <div className="container-fluid section-1">
        <div className="Header-section">
          <div className="row px-0 row-cols-sm-2 ">
          <div className='col-lg-8 col-md-8 col-sm-8 align-items-center d-flex justify-content-evenly py-3'>
            <div className=' border-start ps-2'><div>Askhay</div>
            <div className='head-A'>Screening-React Developer (Simform Solution... / <span><FaSkyatlas /> Saved: 0 second go </span></div></div>
           
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 align-items-center d-flex justify-content-evenly py-3 head-B'>
            <div>Test Time:</div>
            <div><span className='fs-5'><IoSettingsOutline /></span></div>
            <div><button className='btn btn-outline-light'>Finish Test</button></div>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};
export default Header;