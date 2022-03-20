import React from 'react'
import {BsHandbag} from 'react-icons/bs'
import { Button } from 'react-bootstrap';
import ToggleButton from '../../components/Toggle Button';
import { dataset } from '../../constants';
import HeroSlider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const DetailPage = () => {
  const location = window.location.href
  const locationSplit = location.split(":");
  // console.log(locationSplit);
  const uniqueId = locationSplit[3];
  // console.log(uniqueId);

  return (
    <>
    <div className="d-none d-lg-block d-md-block">{
      /*desktop Screen*/
      <NavLg uniqueId={uniqueId} />
    }</div>
    <div className="d-block d-sm-none">{
      /*desktop Screen*/
      <NavSm uniqueId={uniqueId} />
    }</div>
    </>
  )
}

export default DetailPage

const NavLg = ({uniqueId}) => {
  const data = dataset.filter((item) => uniqueId.includes(item.uniqueId))
  console.log(data);
  const img = data[0].images;
  console.log(img);
  const size = data[0].sizes;

  window.onload = () => {
    // (A) GET ALL IMAGES
    let all = document.getElementsByClassName("zoomE");
   
    // (B) CLICK TO GO FULLSCREEN
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        // (B1) EXIT FULLSCREEN
        if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
          if (document.exitFullscreen) { document.exitFullscreen(); }
          else { document.webkitCancelFullScreen(); }
        }
   
        // (B2) ENTER FULLSCREEN
        else {
          if (i.requestFullscreen) { i.requestFullscreen(); }
          else { i.webkitRequestFullScreen(); }
        }
      };
    }}
  };

  const addItem = () => {
    const id = data[0].uniqueId;
    const brand = data[0].brand;
    const price = data[0].discoutedPrice;
    const discription = data[0].discription;
    const image = data[0].images[1];

    localStorage.setItem(id,[brand,price,discription,image])
  }

  return(
    <div className='m-3 d-flex'>
      <div className='' style={{width: "50%"}}>
        <div className='m-3 d-flex flex-wrap gap-2 justify-content-center'>
          {img.map((img)=> {
            return (
              <div style={{width: "49%", height: "400px"}}>
                <img src={img} className="zoomE" style={{width: "100%", height: "100%"}} />  
              </div> 
            )
          })}
        </div>
      </div>
      <div className='' style={{width: "50%"}}>
        <div className="m-3">
          <span><h2>{data[0].brand}</h2></span>
          <span className='fw-lighter fs-4'>{data[0].discription}</span>
          <div className='border details-rating d-flex gap-2 p-1 btn align-items-center justify-content-center' style={{width: "80px"}}>
            {data[0].rating}
            <span>🌟</span>
          </div>
          <div className='bg-secondary mt-3' style={{height:"1px"}}></div>
          <div className='mt-3 d-flex gap-3 align-items-center'>
            <h1>{data[0].discoutedPrice}</h1>
            <h3 className='fw-light'><del>{data[0].discoutedPrice}</del></h3>
            <h3 className='fw-light text-danger'>{data[0].discount}</h3>
          </div>
          <div className='text-info'>inclusive all taxes</div>
          <div className='mt-3'>
            <h5>Size Chart</h5>
            <ToggleButton size={size} />
          </div>
          <Button className='mt-3 w-100 bg-danger d-flex gap-2 align-items-center justify-content-center btn' onClick={addItem}>
            <BsHandbag />
            <span>ADD TO BAG</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

const NavSm = ({uniqueId}) => {
  const data = dataset.filter((item) => uniqueId.includes(item.uniqueId))
  console.log(data);
  const img = data[0].images;
  console.log(img);
  const size = data[0].sizes; 

  const addItem = () => {
    const id = data[0].uniqueId;
    const brand = data[0].brand;
    const price = data[0].discoutedPrice;
    const discription = data[0].discription;
    const image = data[0].images[0];

    localStorage.setItem(id,[brand,price,discription,image])
  }


  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='d-flex flex-column '>
      <div>
        <HeroSlider {...settings}>
          {img.map((image) => {
            return (
              <div className='w-100'>
                <img src={image} classNamew="w-100" />
              </div>
            )
          })}
      </HeroSlider>
    </div>
    <div>
    <div className="m-3">
          <span><h2>{data[0].brand}</h2></span>
          <span className='fw-lighter fs-4'>{data[0].discription}</span>
          <div className='border details-rating d-flex gap-2 p-1 btn align-items-center justify-content-center' style={{width: "80px"}}>
            {data[0].rating}
            <span>🌟</span>
          </div>
          <div className='bg-secondary mt-3' style={{height:"1px"}}></div>
          <div className='mt-3 d-flex gap-3 align-items-center'>
            <h1>{data[0].discoutedPrice}</h1>
            <h3 className='fw-light'><del>{data[0].discoutedPrice}</del></h3>
            <h3 className='fw-light text-danger'>{data[0].discount}</h3>
          </div>
          <div className='text-info'>inclusive all taxes</div>
          <div className='mt-3'>
            <h5>Size Chart</h5>
            <ToggleButton size={size} />
          </div>
          <Button className='mt-3 w-100 bg-danger d-flex gap-2 align-items-center justify-content-center btn' onClick={addItem}>
            <BsHandbag />
            <span>ADD TO BAG</span>
          </Button>
        </div>
    </div>
    </div>
  );
}