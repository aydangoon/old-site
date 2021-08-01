import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class FunStuff extends React.Component {
  constructor(props) {
    super(props)
    this.cat = {
      x: 0,
      y: 40,
      vx: 4,
      vy: 0,
    }
    this.points = [[0, 0]]
    this.textRef = React.createRef(null)
    this.thing = this.thing.bind(this)
  }

  thing() {
    let width = this.textRef.current ? this.textRef.current.offsetWidth : 50
    this.cat.vy += 0.5

    this.cat.x += this.cat.vx
    this.cat.y += this.cat.vy

    if (this.cat.y > 75) {
      this.cat.y = 75
      this.cat.vy *= -1
    }
    if (this.cat.x < 0) {
      this.cat.x = 0
      this.cat.vx *= -1
    } else if (this.cat.x > width - 25) {
      this.cat.x = width - 25
      this.cat.vx *= -1
    }

    this.points.push([this.cat.x + 12.5, this.cat.y + 12.5])
    if (this.points.length > 50) {
      this.points.shift()
    }
    this.forceUpdate()
  }

  componentDidMount() {
    this.tick = setInterval(this.thing, 1000 / 30)
  }
  componentWillUnmount() {
    clearInterval(this.tick)
  }
  render() {
    return (
      <Container fluid="sm">
        <Row>
          <Col className="text-center">
            <h1>Fun Stuff</h1>
            <svg
              width={
                this.textRef.current ? this.textRef.current.offsetWidth : '50'
              }
              height="100"
            >
              {this.points.map(([x, y], i) => (
                <circle cx={x} cy={y} r={1} fill="#484950" />
              ))}
              <image
                href="/images/cat.svg"
                x={this.cat.x}
                y={this.cat.y}
                height="25px"
                width="25px"
              />
            </svg>
            <br />
            <small ref={this.textRef}>Sorry nothing here yet!</small>
          </Col>
        </Row>
      </Container>
    )
  }
}
