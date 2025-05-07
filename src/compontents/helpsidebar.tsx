import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { MdReportGmailerrorred } from 'react-icons/md';
import { FaRegAddressBook } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

interface Props {
  show: boolean;
  onClose: () => void;
  onBack: () => void;
  title: string;
}

const IconButton = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) => (
  <button className="btn btn-light w-100 py-3 d-flex flex-column align-items-center" onClick={onClick}>
    <span style={{ fontSize: '1.5rem', color: '#888' }}>{icon}</span>
    <span className="fw-semibold mt-2">{label}</span>
  </button>
);

const HelpSidebar: React.FC<Props> = ({ show, onClose, onBack, title }) => {
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
            <IconButton icon="‹" label="Back" onClick={onBack} />
          </div>
          <div className="col-6">
            <IconButton
              icon={<FaRegAddressBook />}
              label="Contact Us"
              onClick={() => {
                navigate('/contactform');
                onClose(); // <-- This closes the sidebar
              }}
            />
          </div>
          <div className="col-6">
            <IconButton icon={<MdReportGmailerrorred />} label="Help"  onClick={() => {
                navigate('/help');
                onClose(); // <-- This closes the sidebar
              }} />
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HelpSidebar;
