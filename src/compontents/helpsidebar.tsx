import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { MdPrivacyTip, MdReportGmailerrorred } from 'react-icons/md';
import { FaRegAddressBook } from "react-icons/fa6";

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

const HelpSidebar: React.FC<Props> = ({ show, onClose, onBack, title }) => (
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
          <button className="btn btn-light w-100 py-3 d-flex flex-column align-items-center" onClick={onBack}>
            <span style={{ fontSize: '1.5rem' }}>‹</span>
            <span className="fw-semibold mt-1">Back</span>
          </button>
        </div>
        <div className="col-6"><IconButton icon={<FaRegAddressBook />} label="Contact Us" /></div>
        <div className="col-6"><IconButton icon={<MdReportGmailerrorred />} label=" Help " /></div>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
);

export default HelpSidebar;
