import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
// import Ohio from '../img/ohio.svg'
//import steven from '../img/steven-md.jpg';
import lawn from '../img/manicured-lawn1.jpg';
import steven from '../img/stevenheadshot-small-sq.jpg';

import heart from '../img/heart.svg'
import flowers from '../img/flowers-mono.svg';
import leaves from '../img/leaves-mono.svg';
import grass from '../img/grass.svg';
import thumb from '../img/thumbsup.svg';
import leaf from '../img/leaf.svg';
import leafs from '../img/leafs.svg';
import star from '../img/star.svg';

import Visa from '../img/svg-component/visa.svg';
import Mastercard from '../img/svg-component/mastercard-old.svg';
import Amex from '../img/svg-component/amex.svg';
import Paypal from '../img/svg-component/paypal.svg';



import quoteopen from '../img/quote-open.svg';

import { green } from '../styles/colors';
import { VertCentRow, Icon } from '../shared';


import woman from '../img/walmartwoman.jpg';
import ted from '../img/ted.jpg';
import trapped from '../img/trappedman.jpg';

const Cards = ()=>{ 
  const props = { };
  return (<div>
  <Visa {...props } />
  <Mastercard {...props } />
  <Amex { ...props } />
  <Paypal  { ...props} />
  </div>)
}



//const SlidingText = (...words) => (<div className="slidingVertical">{words.map(w=><span>{w}</span>)}</div>)

const Heart = () => (<img src={heart} alt="love" className="love" style={{ width: '100px', height: '100px' }} alt="<3"/>)

const PaymentTypes = ()=> (<div className="payment-types"><Cards /></div>)
const Steven = () => (<img src={steven} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);
const Map = () => (<img src={map} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);


const LeafsHr = ()=> (<LeafHr img={ leafs } imgStyle={ { width: '40px'} }/>)
const LeafHr = ({ style, imgStyle, img = leaf }) => (
  <div className="leaf-hr" style={ {...style } }>
    <img src={img}  style={ { ...imgStyle } } />
  </div>
)

const Quote = ({ text, author, img })=> (
  <Col  lg={4} md={6} xs={12}>
    <div className='quote-container'>
      <blockquote>
        <p>{ text }</p>
        <footer>
          <div className="author-img" style={{ backgroundImage: `url(${img})`}} />
          <div>&#8212;{ author }</div>
          <Fivestars />
        </footer>
      </blockquote>
    </div>
  </Col>)

const PCent = ({ children, style }) => (<p style={ { ...style, textAlign: "center" } }>{ children }</p>)

const Cent = ({ children, style }) => (<div style={{ ...style, textAlign: "center" }}>{ children }</div>)

const Fivestars = ()=> (<div className="stars"> { [1,2,3,4,5].map(i=>(<img src={star} />)) }</div>)

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
        <h2>At Lawn and Order Landscaping, it is our mission to create satisfied customers by delivering superior service, quality products along with integrity and 100% customer satisfaction.</h2>
        <div style={{ textAlign: "center" }}>
          <a className="btn btn-primary btn-lg" 
            href="#" 
            style={{color: '#FFF', display: 'none' }}
            role="button">Learn More &raquo;</a>
        </div> 
      </div>

    </div>

    <Container fluid>

      <header>
        <h3 className="centered">Meet Our 5 Star Services</h3>
      </header>
      <Row className="service-icons" >
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
      <LeafsHr img={ leafs } imgStyle={ { width: '40px'} }/>
      <Row className="payment-section">
        <Col xs={12}>
          <section>
            <header>
              <h3 className="centered">Quick and Easy online billing</h3>
            </header>
            <PaymentTypes />
            <em>We accept Cash, Visa, Mastercard, Discover and Paypal</em>
            <em>We offer automatic no-fuss weekly, bi-weekly and monthly payment plans</em>
            <em>Or have us send your invoice right to your inbox!</em>
          </section>
        </Col>
      </Row>
      <LeafHr style={ { marginBottom: '-31px' } } imgStyle={ { background: 'initial' }} />
      <Row className="testimony">
        <Col xs={12}>
          <section>
            <header>
              <h3>Here's what people are saying about Lawn and Order Landscaping...</h3>
            </header>
            <Row className="five-star-quotes">
              <Quote author="Paul from Mentor, Ohio" img={ ted } text="Lorem ipsum dolor sit amet, consela et metus vulputate pulvinar nec et tellus. Nam eros nisl, rhoncus ac cursus sit amet," />
              <Quote author="Sharon from Lakewood, Ohio" img={ woman } text="Lorem ipsum dolor sit nisl, rhoncus ac cursus sit amet," />
              <Quote author="Jeff from Madison, Ohio" img={ trapped } text="Lorem ipsum dolor sit nisl, rhoncus ac " />
            </Row>
          </section>
        </Col>
      </Row>
      <LeafHr />
      <Row className="aboutus">
        <Col xs={12}>
          <section>
            <header>
              <h3 className="centered">Meet your neighborhood lawn care specialist</h3>
            </header>
            <div className="mrceo">
              <div className="img" style={{ backgroundImage: `url(${steven})` }} />
              <h4> Steven Slaminka, Lawn and Order CEO </h4>
              <Row>
                <Col md={ { size: 6, offset: 3 } }  xs={12} >
                  <p>
                    "It is our mission at Lawn and Order Landscaping to create satisfied customers by delivering superior service, quality products along with integrity and 100% customer satisfaction."
                  </p>
                </Col>
              </Row>
            </div>
          </section>
        </Col>
      </Row>
    </Container>

  </main>
);


export default Page ;
