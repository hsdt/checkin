import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Greet from './greet';

const techStack = ['React', 'Typescript', 'Webpack', 'Bootstrap'];

export default class Layout extends React.Component<{}, {}> {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <Greet techs={techStack} />
          </Col>
        </Row>
        <Row>
          <Col>test 1.</Col>
          <Col>test 2.</Col>
        </Row>
      </Container>
    );
  }
}
