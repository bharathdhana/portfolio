import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profile from '../img/profile.jpg';

const Home = () => (
  <section
    id="hero"
    className="vh-100 d-flex align-items-center"
    style={{ background: 'linear-gradient(to right, #e0f7fa, #ffffff)' }}
  >
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="text-start">
          <h1 className="hero-title">Hello, I'm <br/>
            Bharath Kumar! <br/>
            <span style={{ color: '#ff00ddff' }}>Full Stack Developer.</span>
            </h1>
          <p className="hero-subtitle">
           I've completed my undergraduate studies and am eager to apply my skills and knowledge in real projects.
            I'm looking for opportunities that help me grow, learn, and gain wisdom while making a meaningful impact.
          </p>
          <Button href="/resume" variant="primary" size="lg">View Resume</Button>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={profile}
            alt="Profile"
            className="rounded-circle shadow-lg"
            style={{
              width: '360px',
              height: '360px',
              objectFit: 'cover',
              border: '5px solid #007bff'
            }}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;
