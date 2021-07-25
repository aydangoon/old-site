import { Container, Row, Col } from 'react-bootstrap'
import { PROJECTS } from '../data/projects'
import { ProjectItem } from './project_item'

export const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Projects</h1>
          <div>
            I really love coding. For me it's more than just an academic
            pursuit, and in my freetime I enjoy working on little projects and
            expanding my understanding of the wide world of computer science.
            Here's some of what I've worked on:
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {PROJECTS.map((item) => (
              <ProjectItem {...item} key={item.title} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
