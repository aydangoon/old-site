import { Container, Row, Col, Image } from 'react-bootstrap'
import { EXPERIENCE } from '../data/experience'
import { ExperienceItem } from './experience_item'

export const Home = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Image
              src="/images/pumpkin.jpg"
              alt="my face here"
              style={{
                width: '150px',
                marginRight: '20px',
                clipPath: 'circle(45%)',
              }}
            />
            <div>
              <h1>Aydan Gooneratne</h1>
              <div>Junior @ UPenn studying CIS</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {EXPERIENCE.map((item, i) => (
            <ExperienceItem key={item.organization + i.toString()} {...item} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}
