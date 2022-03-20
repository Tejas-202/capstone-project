import React from "react";
import { Link } from 'react-router-dom'
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsHandbag, BsHeart, BsFillPersonFill } from "react-icons/bs"

const NavSm = () => {
  return (
    <div className="sticky-top d-flex align-items-center text-center justify-content-between" style={{height:"35px"}}>
        <div>
            <BiMenu className="m-3" />
            <span><b>Myntra</b></span>
        </div>
        <div className="d-flex gap-3 m-3">
            <BiSearch />
            <BsHeart />
            <Link to="bagview" ><BsHandbag /></Link>
            <BsFillPersonFill className="border border-dark rounded-circle" />
        </div>
    </div>
  )
};
const NavMd = () => {
  return (
    <div className="d-flex align-items-center text-center justify-content-between" style={{height:"45px"}}>
    <div>
        <BiMenu className="m-3" />
        <span><b>Myntra</b></span>
    </div>
    <div className="input-group" style={{width:"360px"}}>
        <span className="input-group-text"><BiSearch /></span>
        <input type="search" className="form-control" placeholder="Search for Product, Brand and more" />
    </div>
    <div className="d-flex gap-3 m-3">
        <BsHeart />
        <Link to="bagview" ><BsHandbag /></Link>
        <BsFillPersonFill className="border border-dark rounded-circle" />
    </div>
</div>
  );
};
const NavLg = () => {
  return(
    <div className="d-flex align-items-center justify-content-between" style={{height:"60px"}}>
      <div style={{width:"40px"}} className="m-3">
        <img src="/images/925076140s.jpg" className="w-100"/>
      </div>
      <div className="d-flex gap-3 fs-6 ">
          <span role="button">MEN</span>
          <span role="button">WOMEN</span>
          <span role="button">KIDS</span>
          <span role="button">HOME & LIVING</span>
          <span role="button">BEAUTY</span>
          <span role="button">STUDIO</span>
      </div>
      <div className="input-group" style={{width:"400px"}}>
        <span className="input-group-text"><BiSearch /></span>
        <input type="search" className="form-control" placeholder="Search for Product, Brand and more" />
    </div>
    <div className="m-3 d-flex gap-3 align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <BsFillPersonFill className="border border-dark rounded-circle" />
            <span className="fw-light">Profile</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <BsHeart />
            <span className="fw-light">Wishlist</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Link to="bagview" ><BsHandbag /></Link>
            <span className="fw-light">Bag</span>
        </div>
    </div>
    </div>
  );
};

const Navbar = () => {
return (
  <>
  <nav>
  <div className="d-block d-sm-none">{
    /*Mobile Screen*/
    <NavSm />
  }</div>
  <div className="d-none d-sm-block d-lg-none">{
    /*Tablet Screen*/
    <NavMd />
  }</div>
  <div className="d-none d-lg-block">{
    /*desktop Screen*/
    <NavLg />
  }</div>
  </nav>
  </>
)

};

export default Navbar;
