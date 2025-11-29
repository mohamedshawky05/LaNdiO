import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactBanner() {
  return (
    <div className="py-5" style={{ backgroundColor: "#f6f6ff" }} id="contect">
      <Container className="p-0 shadow rounded overflow-hidden" style={{ background: "white" }}>
        <Row>
          {/* LEFT SECTION */}
          <Col md={5} className="text-white p-4" style={{ background: "#1d39ff" }}>
            <h2 className="fw-bold">Ready to Connect?</h2>
            <p className="mb-4">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="mb-3 p-3 bg-white bg-opacity-10 rounded">
              <h6 className="fw-bold d-flex align-items-center"><FaMapMarkerAlt className="me-2" /> Visit Our Office</h6>
              <p className="mb-0">1247 Central Park West<br/>New York, NY 10024</p>
            </div>

            <div className="mb-3 p-3 bg-white bg-opacity-10 rounded">
              <h6 className="fw-bold d-flex align-items-center"><FaEnvelope className="me-2" /> Send Us a Message</h6>
              <p className="mb-0">email@protected.com</p>
            </div>

            <div className="mb-3 p-3 bg-white bg-opacity-10 rounded">
              <h6 className="fw-bold d-flex align-items-center"><FaPhoneAlt className="me-2" /> Call Us Directly</h6>
              <p className="mb-0">+1 (555) 432-1098</p>
            </div>

            <div className="mb-4 p-3 bg-white bg-opacity-10 rounded">
              <h6 className="fw-bold d-flex align-items-center"><FaClock className="me-2" /> Business Hours</h6>
              <p className="mb-0">Mon-Fri: 8AM–7PM<br/>Weekends: By Appointment</p>
            </div>

            <p className="fw-bold mt-4">Follow Our Journey</p>
            <div className="d-flex gap-3 fs-4">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </Col>

          {/* RIGHT SECTION FORM */}
          <Col md={7} className="p-4">
            <h4 className="fw-bold mb-3">Drop Us a Line</h4>
            <Form>
              <Row>
                <Col md={6} className="mb-3"><Form.Control placeholder="Full Name" /></Col>
                <Col md={6} className="mb-3"><Form.Control placeholder="Email Address" /></Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3"><Form.Control placeholder="Phone Number" /></Col>
                <Col md={6} className="mb-3"><Form.Control placeholder="Subject" /></Col>
              </Row>

              <Form.Control as="textarea" rows={5} placeholder="Your message goes here..." className="mb-3" />
              <Button className="px-4 py-2 fw-bold" style={{ background: "#1d39ff" }}>Send Message →</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
