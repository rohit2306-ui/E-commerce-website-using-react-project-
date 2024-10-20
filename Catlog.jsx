import React from 'react'
import { useState, useEffect } from 'react';


function Catlog() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPhotos(data);
          
        });
    }, []);
  return (
    <>
    <h1 className='Wel'>Welcome</h1>
    <div className="catlog-data">
        {photos.map((photo) => (
        <div className="pos-d">
          
            <img src={photo.image}  alt="" />
            <div className="data-catlog-imge">
                <h3>{photo.title}</h3>
                <h2>-{photo.rating.rate}%off</h2>
            </div>
        </div>
      ))}
     </div>
  </>

)}

export default Catlog