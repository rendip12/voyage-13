import {Card, Col, Row, Container } from "react-bootstrap"

const Service = () => {
    return (
      <div> 
        <h1 className="text-center text-white mb-4"> SERVICES</h1>
        <Container>
      <Row>
        <Col sm={12} md={6} lg={3} className="mb-4">
          <Card className="bg-secondary text-black text-center mt-4" style={{ height: '24rem'}}>
            <Card.Body>
              <Card.Title>Search for Bus</Card.Title>
              <Card.Text>
              Search for busses to where you headed to a lot easier
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3} className="mb-4">
          <Card className="bg-secondary text-black text-center mt-4" style={{ height: '24rem'}}>
            <Card.Body>
              <Card.Title>Route Info</Card.Title>
              <Card.Text>
                This is some text within a card body.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3} className="mb-4">
          <Card className="bg-secondary text-black text-center mt-4" style={{ height: '24rem'}}>
            <Card.Body>
              <Card.Title>E-Ticket</Card.Title>
              <Card.Text>
                This is some text within a card body.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3} className="mb-4">
          <Card className="bg-secondary text-black text-center mt-4" style={{ height: '24rem'}}>
            <Card.Body>
              <Card.Title>Nearby Bus</Card.Title>
              <Card.Text>
                This is some text within a card body.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

      </div>
    )
}

export default Service
