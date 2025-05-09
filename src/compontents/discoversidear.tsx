import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { VscBook } from "react-icons/vsc";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa";
import { GoLocation } from 'react-icons/go';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Product from './Context/ProductList';


interface Props {
  show: boolean;
  onClose: () => void;
  onBack: () => void;
  title: string;
}

const IconButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <button className="btn btn-light w-100 py-3 d-flex flex-column align-items-center">
    <span style={{ fontSize: '1.5rem', color: '#888' }}>{icon}</span>
    <span className="fw-semibold mt-2">{label}</span>
  </button>
);

const DiscoverSidebar: React.FC<Props> = ({ show, onClose, onBack, title }) => {
  const navigate = useNavigate(); 

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <span style={{ fontSize: "0.9rem", color: "#888" }}>Main menu</span>
          &nbsp; <b>› {title}</b>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="row g-3">
          <div className="col-6">
            <button
              className="btn btn-light w-100 py-3 d-flex flex-column align-items-center"
              onClick={onBack}
            >
              <span style={{ fontSize: '1.5rem' }}>‹</span>
              <span className="fw-semibold mt-1">Back</span>
            </button>
          </div>
          <div className="col-6">
            <IconButton icon={<VscBook />} label="Our Story" />
          </div>
          <div className="col-6">
            <IconButton icon={<HiOutlineBuildingOffice2 />} label="Franchise" />
          </div>
          <div className="col-6">
            <IconButton icon={<FaBriefcase />} label="Careers" />
          </div>
          <div className="col-6">
          <div onClick={() => {
  navigate('/ProductList');
  onClose();
}}>
  <IconButton icon={<GoLocation />} label="Location" />
</div>

          </div>
          <div className="col-6">
            <IconButton icon={<AiOutlineMenuUnfold />} label="Menu" />
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default DiscoverSidebar;
