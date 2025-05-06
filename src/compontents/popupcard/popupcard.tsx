import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaStore, FaShoppingBag, FaMotorcycle } from 'react-icons/fa';
import bgpopup from './popuplogo/bgpopup.png'; 


interface PopupCardProps {
    show: boolean;
    onClose: () => void;
    onDeliveryClick: () => void;
    onClickCollect: () => void;   
    onFindStore: () => void; 

  }
  const PopupCard: React.FC<PopupCardProps> = ({
    show,
    onClose,
    onDeliveryClick,
    onClickCollect,    
    onFindStore        
  }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <div className="rounded justify-content-center align-items-center">
        <img
          src={bgpopup}
          alt="Food Banner"
          className="img-fluid rounded-top"
        />
        <div className="bg-white p-4 text-center">
          <h4 className="fw-bold">CLICK + COLLECT</h4>
          <h5 className="fw-bold text-secondary">TAKEAWAY + PICKUP</h5>

          <div className="d-grid gap-3 mt-4">
            <Button
              className="d-flex justify-content-between align-items-center fw-bold px-3"
              onClick={onDeliveryClick}
              style={{ backgroundColor: '#00adee', color: '#ffffff' }}
            >
              <span><FaMotorcycle className="me-2" />ORDER FOR DELIVERY</span>
              <span>→</span>
            </Button>

            <Button className="d-flex justify-content-between align-items-center fw-bold px-3" 
                onClick={onClickCollect} 
                style={{ backgroundColor: '#00adee', color: '#ffffff' }}>
                <span><FaShoppingBag className="me-2" />CLICK + COLLECT</span>
                 <span>→</span>
            </Button>

            <Button className="d-flex justify-content-between align-items-center fw-bold px-3" style={{ backgroundColor: '#00adee', color: '#ffffff' }}>
              <span><FaStore className="me-2" />FIND STORE</span>
              <span>→</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupCard;
