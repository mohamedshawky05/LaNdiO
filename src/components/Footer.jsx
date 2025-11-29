import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDribbble, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5" style={{ background: "#f1f2ff" }}>
      <Container>
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <h3 className="fw-bold">Landio</h3>
            <p>
              Crafting exceptional digital experiences through thoughtfully designed and
              innovative solutions that elevate your brand presence.
            </p>

            <p className="d-flex align-items-center mb-2"><FaMapMarkerAlt className="me-2" /> 123 Creative Boulevard, Design District, NY 10012</p>
            <p className="d-flex align-items-center mb-2"><FaPhoneAlt className="me-2" /> +1 (555) 987-6543</p>
            <p className="d-flex align-items-center"><FaEnvelope className="me-2" /> email@protected</p>
          </Col>

          <Col md={2} className="mb-4">
            <h5 className="fw-bold">Studio</h5>
            <ul className="list-unstyled">
              <li>Our Story</li>
              <li>Design Process</li>
              <li>Portfolio</li>
              <li>Case Studies</li>
              <li>Awards</li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li>Brand Identity</li>
              <li>Web Design</li>
              <li>Mobile Apps</li>
              <li>Digital Strategy</li>
              <li>Consultation</li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h5 className="fw-bold">Resources</h5>
            <ul className="list-unstyled">
              <li>Design Blog</li>
              <li>Style Guide</li>
              <li>Free Assets</li>
              <li>Tutorials</li>
              <li>Inspiration</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="fw-bold">Connect</h5>
            <ul className="list-unstyled">
              <li>Start Project</li>
              <li>Schedule Call</li>
              <li>Join Newsletter</li>
              <li>Follow Updates</li>
              <li>Partnership</li>
            </ul>
          </Col>
        </Row>

        <hr />

        <Row className="align-items-center pt-3">
          <Col md={6}>
            <h5>Stay Inspired</h5>
            <p>Subscribe to receive design insights and creative inspiration delivered monthly.</p>
          </Col>

          <Col md={6} className="d-flex justify-content-end gap-4 fs-4">
            <FaDribbble />
            <FaBehance />
            <FaInstagram />
            <FaLinkedin />
          </Col>
        </Row>

        <hr className="mt-4" />

        <Row className="pt-3">
          <Col md={6}>© Landio. All rights reserved.</Col>
          <Col md={6} className="d-flex justify-content-end gap-3">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
            <span>Designed by BootstrapMade</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}