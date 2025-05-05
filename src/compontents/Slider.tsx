import { Swiper, SwiperSlide } from 'swiper/react';

import img3 from '../assets/slider/img3.jpeg';
import img4 from '../assets/slider/img4.jpeg';
import img5 from '../assets/slider/img5.jpeg';
import img6 from '../assets/slider/img6.jpeg';
import  backgroundsection from '../assets/herosection/backgroundsection.svg'; 
import  giftcardbg from  '../assets/Giftcardbg/gift-card-icon2.png';
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
<Card className='mx-5 mb-5'>
<Row className="align-items-start justify-content-start text-center">
<Col>
<Card className=" mx-5 mb-5 mt-5 border-0 shadow rounded-4 overflow-hidden ">
  <div className="   text-dark p-5 px-4"  style={{ backgroundColor: '#00adee',
    backgroundImage: `url(${giftcardbg})`,
    
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
     backgroundSize: 'auto',
  }}>
    <h5 className="fw-bold text-start ">Gift Card</h5>
    <p className=" text-start mt-1 mb-0">Surprise your loved ones with a gift</p>
    </div>

   
    
    

  <div className=" text-start bg-white px-4 py-3">
    <span className="  border border-dark px-3 py-2 fw-bold d-inline-block">MR T’s</span>
  </div>
</Card>
</Col>

      
    
     <Col>
    <div className="text-start py-5 px-5">
      <h2>
      Treat your friend with a MR Ts Gift Card
        </h2>
        <p className="text-muted text-start">Whether you want to treat to Mom Friday 
          night favorite or surprise your mate with a "special on me". Show you care the tasty way</p>
          <p className="text-decoration-underline fw-bold text-start">
            Get Your Gift card now 
          </p>
    </div>
     </Col>
     </Row>
     </Card>
     
  </>
 );
    }