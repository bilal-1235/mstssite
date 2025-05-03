import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import bgvideoimg from '../assets/herosection/bgvideoimg.png'; // Adjust the path as necessary

const HeroVideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card
      className="text-white border-0 mx-5 mb-5"
      style={{
        borderRadius: '30px',
        backgroundImage: isPlaying ? 'none' : `url(${bgvideoimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {!isPlaying ? (
        <>
          <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center px-4">
            <h1 className="fw-bold display-4">
              HELLO AND EXPERIENCE THE <br /> DIFFERENCE FOR YOURSELF!
            </h1>
          </div>
          <Button
            variant="light"
            className="position-absolute bottom-0 start-0 m-4 rounded-circle p-3"
            onClick={() => setIsPlaying(true)}
          >
            <FaPlay size={24} />
          </Button>
        </>
      ) : (
        <div className="h-100 w-100">
          <iframe
            width="100%"
            height="100%"
            src="https://youtu.be/0juyxaYkZzg?si=sYQuSJ-r3CFdt-Mb"
            title="Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}
    </Card>
  );
};

export default HeroVideoCard;
