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
  onFindStore,
}) => {
  return (
    <Modal show={show} onHide={onClose} centered contentClassName="border-0 rounded overflow-hidden">
      <div className="position-relative">
        {/* Image background with close button */}
        <img
          src={bgpopup}
          alt="Food Banner"
          className="img-fluid w-100"
          style={{ display: 'block' }}
        />

        {/* Close Button Overlay */}
        <button
          onClick={onClose}
          type="button"
          className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle"
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.25rem',
            padding: 0,
            lineHeight: 1,
            border: 'none',
          }}
        >
          ×
        </button>
      </div>

      <div className="bg-white p-4 text-center">
        <h4 className="fw-bold">CLICK + COLLECT</h4>
        <h5 className="fw-bold text-secondary">TAKEAWAY + PICKUP</h5>

        <div className="d-grid gap-3 mt-4">
          <Button
            className="d-flex justify-content-between align-items-center fw-bold px-3"
            onClick={onDeliveryClick}
            style={{ backgroundColor: '#00adee', color: '#ffffff' }}
          >
            <span>
              <FaMotorcycle className="me-2" />
              ORDER FOR DELIVERY
            </span>
            <span>→</span>
          </Button>

          <Button
            className="d-flex justify-content-between align-items-center fw-bold px-3"
            onClick={onClickCollect}
            style={{ backgroundColor: '#00adee', color: '#ffffff' }}
          >
            <span>
              <FaShoppingBag className="me-2" />
              CLICK + COLLECT
            </span>
            <span>→</span>
          </Button>

          <Button
            className="d-flex justify-content-between align-items-center fw-bold px-3"
            onClick={onFindStore}
            style={{ backgroundColor: '#00adee', color: '#ffffff' }}
          >
            <span>
              <FaStore className="me-2" />
              FIND STORE
            </span>
            <span>→</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PopupCard;
