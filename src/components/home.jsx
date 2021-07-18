import { Container, Row, Col } from 'react-bootstrap'
import { AgeDisplay } from './age_display'
import STATE from '../data/state'
import { properPluralize, properA } from '../helpers'

export const Home = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col>
          <h1>About Me</h1>
          <div>
            <p>
              Hello, I'm {STATE.firstName} {STATE.lastName}! I'm <AgeDisplay />,
              and currently {properA(STATE.currentOccupation)}{' '}
              <span className="state">{STATE.currentOccupation}</span>. My
              academic interests are in discrete maths, computer science, and
              computer networking.
            </p>
            <p>
              My hobbies include, but are not limited to: coding, bass, guitar,
              running and video games. I also enjoy the finer things in life,
              like cats, scalable vector graphics, and scalable vector graphics
              of cats.
            </p>
            <p>
              This site serves as a giant React Component for me. As{' '}
              <span className="state">my state</span> mutates in life, I'll try
              and keep this up to date!
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Experience Overview</h1>
          <p>
            Currently:
            <ul>
              <li>
                Working as {properA(STATE.currentOccupation)}{' '}
                <span className="state">{STATE.currentOccupation}</span>.
              </li>
              <li>Frontend Engineer @ PennLabs. Work on Penn Clubs team.</li>
              <li>TA for Nets 212.</li>
            </ul>
          </p>

          <p>
            I'm highly familiar with many common programming languages such as
            Javascript, Java, C, Python, etc. as well as with many popular web
            development libs and frameworks such as nodejs, react, express, etc.
          </p>
          <p>
            To see a comprehensive overview of my experience please checkout the
            experience tab.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
