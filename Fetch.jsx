import { useState, useEffect } from 'react';
const Fetch = () => {

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
    <div className='padding'>
    {photos.map((photo) => (
        <div className="main-card">
          <img  key={photo.id} src={photo.image} width={100}/>
          <div className="content-about">
            <h1>{photo.title}</h1>
            <h2>{photo.description}</h2>
            <div className="category">
              <h1>Category:</h1>
              <h1>{photo.category}</h1>
              <h2>Price:</h2>
              <h2>{photo.price}</h2>
              <h3>$</h3>
              <button className='buy'>buy</button>
            </div>
            <div className="progress-div">
              <h1>Rating's:</h1>
            <progress max={10} value={photo.rating.rate}></progress>
            <h2>{photo.rating.rate}</h2>
            <h2>/10</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Fetch;