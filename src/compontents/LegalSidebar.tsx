import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { MdPrivacyTip, MdReportGmailerrorred } from 'react-icons/md';
import { FaBalanceScale, FaCookieBite } from 'react-icons/fa';
import { GiHazardSign } from 'react-icons/gi';

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

const LegalSidebar: React.FC<Props> = ({ show, onClose, onBack, title }) => (
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
        <div className="col-6"><IconButton icon={<MdPrivacyTip />} label="Team and Serivces" /></div>
        <div className="col-6"><IconButton icon={<MdReportGmailerrorred />} label="Privacy Policy " /></div>
        <div className="col-6"><IconButton icon={<FaBalanceScale/>} label="Legal Notice " /></div>
        <div className="col-6"><IconButton icon={< FaCookieBite />} label="Cookies" /></div>
        <div className="col-6"><IconButton icon={< GiHazardSign />} label="Allergy Info" /></div>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
);

export default LegalSidebar;
