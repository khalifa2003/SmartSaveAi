import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './LandingSection.css';

const LandingSection = () => {
  return (
    <div>
      <section className="hero text-center text-black">
        <Container>
          <Row>
            <Col md={12}>
              <h1>Welcome to SmartSaveAi</h1>
              <p>Make smarter financial decisions with AI-powered insights.</p>
              <Button variant="success" size="lg" href="/survey">Take the Survey</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="features py-5">
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>AI-powered Predictions</Card.Title>
                  <Card.Text>
                    Get personalized investment advice based on your financial profile.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Data-Driven Insights</Card.Title>
                  <Card.Text>
                    Make informed decisions with data-backed recommendations for gold, bank, and more.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Easy to Use</Card.Title>
                  <Card.Text>
                    A user-friendly interface that allows you to share your financial data and get instant results.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="footer text-center py-3">
        <Container>
          <p>&copy; 2025 SmartSaveAi. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default LandingSection;
