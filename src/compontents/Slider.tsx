import { Swiper, SwiperSlide } from 'swiper/react';

import img3 from '../assets/slider/img3.jpeg';
import img4 from '../assets/slider/img4.jpeg';
import img5 from '../assets/slider/img5.jpeg';
import img6 from '../assets/slider/img6.jpeg';
import  backgroundsection from '../assets/herosection/backgroundsection.svg'; // Adjust the path as necessa Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Autoplay, } from 'swiper/modules';
import { Card, Row, Col } from 'react-bootstrap'; // Adjust the import path if necessary

export default function App() {
    return (
        <>
<section>
      <Swiper
      modules={[Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={200}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,

        }
        }
        speed={600}
        loop  = {true}
        className=" mx-5 mb-5 "
      >
        
        
        <SwiperSlide ><img className='rounded ' src={img3} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img className='rounded ' src={img4} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img className='rounded ' src={img5} alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img className='rounded ' src={img6} alt="Slide 5" /></SwiperSlide>
      </Swiper>
      
      </section>
      <Card className="py-2 px-5 mt-5 mb-5 mx-5"  style={{
    backgroundImage: `url(${backgroundsection})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
  <Row className="align-items-center justify-content-center ">
    
    
    <Col md={6}>
    <h2 className="fw-bold fs-1 text-center align-items-center justify-content-center button-center" style={{ fontSize: '5.5em' }}>
  ARE YOU A HUSTLER, BABY?
</h2>
      <p className="text-muted text-center">
      Do you want to be your own boss and own a piece of the MR T's brand? If so, 
      we're looking for qualified franchisees to open new locations across the UK and internationally. 
      MR T's is a popular brand with a loyal following. We offer a unique and delicious menu that includes 
      burgers, parmesans, pizzas and shakes. We also have a strong
       marketing and advertising presence that helps us to keep growing our customer base.
      </p>

      
     </Col>
     <div className='align-item-center justify-content-center text-center'> <button className="custom-enqiury-btn text-center  " type="button">Enqiury</button></div>
     
     
  </Row>
</Card>
        </>
       );
    }