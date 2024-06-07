import {Card, Image} from 'react-bootstrap'

const About = () => {
    return (
        <div>
            <Card border="danger" style={{ width: '26rem',height: '14rem', background: 'black' }} id='about-us'>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title style={{textAlign:'center', color: 'white'}}>WHO ARE WE?</Card.Title>
          <Card.Text style={{textAlign:'center', color: 'white'}}>
          Voyages is the best bus service providers by giving you easier access of its routes and schedules so that you can get amazing experience.
          <button className='text-center'>LEARN MORE</button>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
        </div>
    )
}

export default About