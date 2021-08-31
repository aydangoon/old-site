import { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { EXPERIENCE } from '../data/experience'
import { ExperienceItem } from './experience_item'
import { DownloadIcon } from '../svgs'

export const Home = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
            id="banner"
          >
            {/*<Image
              src="/images/pumpkin.jpg"
              alt="my face here"
              style={{
                width: '150px',
                marginRight: '20px',
                borderRadius: '50%',
              }}
            />*/}
            <div>
              <h1>Aydan Gooneratne</h1>
              <h5>Junior @ UPenn studying CIS</h5>
              <small>
                aydang@seas.upenn.edu | 484-410-1856 | <DownloadIcon />{' '}
                <a href="/files/resume.pdf" download>
                  resume
                </a>
              </small>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {EXPERIENCE.map((item, i) => (
            <ExperienceItem
              index={i + 1}
              key={item.organization + i.toString()}
              {...item}
            />
          ))}
        </Col>
      </Row>
    </Container>
  )
}
