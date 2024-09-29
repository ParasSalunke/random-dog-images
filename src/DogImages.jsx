import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';     
import './DogImages.css';

const DogImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/10');
        setImages(response.data.message);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div>
      <h1>Random Dog Images</h1>
      <div className="card-container">
        {images.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default DogImages;