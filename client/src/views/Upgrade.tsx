import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';

import Card from '../components/cards/Card';

import Button from '../components/buttons/CustomButton';

class Upgrade extends Component {
  render() {
    return (
      <div className='content'>
        <Container fluid={true}>
          <Row>
            <Col md={8}>
              <Card
                hCenter
                title='Light Bootstrap Dashboard PRO React'
                category='Are you looking for more components? Please check our Premium Version of Light Bootstrap Dashboard React.'
                ctTableResponsive
                ctTableFullWidth
                ctTableUpgrade
                content={
                  <Table>
                    <thead>
                      <tr>
                        <th />
                        <th className='text-center'>Free</th>
                        <th className='text-center'>PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Components</td>
                        <td>30</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>Plugins</td>
                        <td>3</td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td>Example Pages</td>
                        <td>7</td>
                        <td>24</td>
                      </tr>
                      <tr>
                        <td>Login/Register/Lock Pages</td>
                        <td>
                          <i className='fa fa-times text-danger' />
                        </td>
                        <td>
                          <i className='fa fa-check text-success' />
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td>
                          <i className='fa fa-times text-danger' />
                        </td>
                        <td>
                          <i className='fa fa-check text-success' />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td>Free</td>
                        <td>Just $49</td>
                      </tr>
                      <tr>
                        <td />
                        <td>
                          <Button
                            href='#'
                            round
                            fill
                            disabled
                            variant='default'
                          >
                            Current Version
                          </Button>
                        </td>
                        <td>
                          <Button
                            target='_blank'
                            href='https://hosodientu.com/pro'
                            round
                            fill
                            variant='info'
                          >
                            Upgrade to PRO
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Upgrade;
