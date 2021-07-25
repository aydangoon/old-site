import { Container, Row, Col, Image } from 'react-bootstrap'
import { AgeDisplay } from './age_display'
import STATE from '../data/state'
import { properPluralize, properA } from '../helpers'
import { EXPERIENCE } from '../data/experience'
import { ExperienceItem } from './experience_item'

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Image
            src="/images/pumpkin.jpg"
            alt="my face here"
            roundedCircle
            style={{ width: '50%' }}
          />
        </Col>
        <Col>
          <h1>Aydan Gooneratne</h1>
          <div>Junior @ UPenn studying CIS</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Experience</h2>
          {EXPERIENCE.map((item, i) => (
            <ExperienceItem key={item.organization + i.toString()} {...item} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}
