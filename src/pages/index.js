import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
// import Ohio from '../img/ohio.svg'
//import steven from '../img/steven-md.jpg';
import map from '../img/greenmap2.jpg';
import wood from '../img/wood.jpg';
import lawn from '../img/manicured-lawn1.jpg';
import steven from '../img/stevenheadshot-small-sq.jpg';
import heart from '../img/heart.svg'
import flowers from '../img/flowers-mono.svg';
import leaves from '../img/leaves-mono.svg';
import grass from '../img/grass.svg';
import thumb from '../img/thumbsup.svg';

import { green } from '../styles/colors';
import { VertCentRow, Icon } from '../shared';

import woman from '../img/walmartwoman.jpg';
import ted from '../img/ted.jpg';
import trapped from '../img/trappedman.jpg';


//const SlidingText = (...words) => (<div className="slidingVertical">{words.map(w=><span>{w}</span>)}</div>)

const Heart = () => (<img src={heart} alt="love" className="love" style={{ width: '100px', height: '100px' }} alt="<3"/>)

const Steven = () => (<img src={steven} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);
const Map = () => (<img src={map} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);


const PCent = ({ children, style }) => (<p style={ { ...style, textAlign: "center" } }>{ children }</p>)

const Cent = ({ children, style }) => (<div style={{ ...style, textAlign: "center" }}>{ children }</div>)


const Page = () => (
  <main role="main" id="home">

    <div className="jumbotron" style={{backgroundImage: `url(${lawn})`, backgroundSize: 'cover' }}>
      <Container >
        <VertCentRow  style={{ marginTop: '5rem', marginBottom: '5rem' }}>
          <Col className="pitch-head">
            <h1 className="pitch"> We <Heart/> grass!</h1>
          </Col>
        </VertCentRow>
      </Container>
      <div className="display-3 sub-pitch">
        <p>At Lawn and Order Landscaping, it is our mission to create satisfied customers by delivering superior service, quality products along with integrity and 100% customer satisfaction.</p>
        <div style={{ textAlign: "center" }}>
          <a className="btn btn-primary btn-lg" 
            href="#" 
            style={{color: '#FFF'}}
            role="button">Learn More &raquo;</a>
        </div> 
      </div>

    </div>

    <Container fluid>
      <Row style={{ } }className="service-icons" >
        <Col md={3} >
          <div>
            <Icon src={grass} />
            <h4>Lawn Care</h4>
          </div>
        </Col>
        <Col md={3} >
          <div>
            <Icon src={leaves} />
            <h4>Autumn Clean up</h4>
          </div>
        </Col>
        <Col md={3} >
          <div>
            <Icon src={flowers} />
            <h4>Flower Bedding</h4>
          </div>
        </Col>
        <Col md={3} >
          <div>
            <Icon src={thumb} />
            <h4>And more!</h4>
          </div>
        </Col>
      </Row>
      <Row className="aboutus">
        <section>
          <header>
            <h3>Quick and easy online billing</h3>
          </header>
          <p> We accept Visa, mastercard and discover</p>
        </section>
      </Row>

      <Row className="testimony">
        <Col xs={12}>
          <section>
            <header>
              <h3>Here's what people are saying about Lawn and Order Landscaping...</h3>
            </header>
            <div className="quotes">
              <blockquote>
                <p> 
                  Steven showed up half naked and bleeding from his eyes, my kinda guy! 
                </p>
                <span><div className="img" style={{ backgroundImage: `url(${ted})` }} />- Ted from the feed store</span>
              </blockquote>
              <blockquote>
                <p> 
                  One of the lawn dudes had a weird odor about him, like burning tires and failure, my two favorite scents 
                </p>
                <span><div className="img" style={{ backgroundImage: `url(${woman})`}} />- Some woman at Walmart</span>
              </blockquote>
              <blockquote>
                <p> 
                  I have no idea where I am right now please, could someone call for help?
                </p>
                <span><div className="img" style={{ backgroundImage: `url(${trapped})` }} />- Some guy stuck somewhere weird</span>
              </blockquote>
            </div>
          </section>
        </Col>
      </Row>
      <hr/>
      <Row className="aboutus">
        <Col xs={12}>
          <section>
            <header>
              <h3>Meet your neighborhood lawn care specialist</h3>
            </header>
            <div className="mrceo">
              <div className="img" style={{ backgroundImage: `url(${steven})` }} />
              <h4> Steven Slaminka, Lawn and Order CEO </h4>
              <p>
              </p>
            </div>
          </section>
        </Col>
      </Row>
    </Container>

  </main>
);

export default Page;
