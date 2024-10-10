import React from 'react'
import { useState, useEffect } from 'react';

function Choose() {
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
    <div className='chose-data-of-data'>
        {photos.map((photo) => (
            <a href=""><h1>{photo.category}</h1></a>
        ))}
    </div>
    </>
  )
}

export default Choose