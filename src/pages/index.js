import React from 'react';

import Link from 'gatsby-link';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import Ohio from '../img/ohio.svg'
//import steven from '../img/steven-md.jpg';
import lawn from '../img/manicured-lawn1.jpg';

import steven from '../img/steven1-200.jpg';
import stevenTruck from '../img/steven-truck200-compr.jpg';
import stevenWorking from '../img/A-steven-working-compress.jpg';

import heart from '../img/heart.svg'
import flowers from '../img/flowers-mono.svg';
import leaves from '../img/leaves-mono.svg';
import grass from '../img/grass.svg';
import thumb from '../img/thumbsup.svg';
import leaf from '../img/leaf.svg';
import leafs from '../img/leafs.svg';
import star from '../img/star.svg';

import scissors from '../img/scissors.svg';
import Ohio from '../img/svg-component/ohiogps.svg';
import Visa from '../img/svg-component/visa.svg';
import Mastercard from '../img/svg-component/mastercard-old.svg';
import Amex from '../img/svg-component/amex.svg';
import Paypal from '../img/svg-component/paypal.svg';
import EmailIcon from '../img/svg-component/emailat.svg';
import logoimg from '../img/A-laao-small.png';

import PhoneHandset from '../img/svg-component/phone-handset.svg';
import FBook from '../img/svg-component/fbook.svg';
import Email from '../img/svg-component/email.svg';


const phoneNumber  ='1.440.476.3275';
const emailContact = 'lawn.order.ohio@gmail.com';
const facebookURL = 'https://www.facebook.com/Lawn-Order-Landscaping-LLC-719546044898978/'


//https://www.youtube.com/watch?v=zhM6C0P7VO0
//https://github.com/gatsbyjs/gatsby/tree/master/examples/using-gatsby-image


//<div style={{ display: "none" }}>Your local business and residential lawn-care specialist</div>
//
//p
/* <h2>At Lawn and Order Landscaping, it is our mission to create satisfied customers by delivering superior service, quality products along with integrity and 100% customer satisfaction.</h2> */ 


//https://www.gatsbyjs.org/packages/gatsby-image/#two-types-of-responsive-images

import { VertCentRow, Icon } from '../shared';


//import Female from '../img/svg-component/female.svg';
//import Male from '../img/svg-component/male.svg';

import female from '../img/female.svg';
import male from '../img/male.svg';

import quoteopen from '../img/quote-open.svg';

const ContactForm = ()=> (<Form 
  method="POST"
  netlify-honeypot="bot-field"
  data-netlify="true"
  name="contact-form">
  <p style={{ display: "none" }}>
    <label>Don’t fill this out, it is to detect spam <input name="bot-field" /></label>
  </p>
  <FormGroup row>
    <Col xs={12}>
      <h4>&mdash; Contact Us Form</h4>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label for="name" sm={2}>Name:</Label>
    <Col sm={10}>
      <Input type="text"
        name="name" id="name" placeholder="Name" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label for="email" sm={2}>Email:</Label>
    <Col sm={10}>
      <Input 
        type="email" 
        name="email" id="email" placeholder="@" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label for="phone" sm={2}>Phone:</Label>
    <Col sm={10}>
      <Input type="tel" name="phone" 
        id="phone" placeholder="Phone" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label sm={2} for="reason">Reason:</Label>
    <Col sm={10}>
      <Input 
        type="select" 
        name="reason"  id="reason">
        <option>Estimate</option>
        <option>Careers</option>
        <option>Other</option>
      </Input>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label sm={2} for="message">Message:</Label>
    <Col sm={10}>
      <Input type="textarea" style={{ height: '150px' }} 
        name="message" id="message" />
    </Col>


  </FormGroup>

  <Row>
    <Col sm={{size: 10, offset: 2}}>
      <FormText color="muted">
        *** If applying for a job please paste the text of your resume, or send an email with it attached to {emailContact}
      </FormText>
    </Col>
  </Row>
  <FormGroup row>
    <Col sm={{ size: 10, offset: 2 }}>
      <Button color="primary" style={{color: '#FFF' }} type="submit">Submit</Button>
    </Col>
  </FormGroup>
</Form>)


const Testimony = ()=> (<section><Row className="testimony">
    <Col xs={12}>
      <header>
        <h3>Hear what people are saying about Lawn and Order Landscaping...</h3>
      </header>
      <Row className="five-star-quotes">
        <Quote author="Paul S. from Mentor, Ohio" img={ male } text="Steven helped me greatly. I was selling my house and he gave me just what I needed. Great service and a reasonable price." />
        <Quote author="Sharon P. from Mayfield, Ohio" img={ female } text="Very Impressed! On-time, quick, detailed and effecient. My husband and I are very particular about our yard, and we are very impressed" />
        <Quote author="Jeff T. from Chesterland, Ohio" img={ male } text="Steven has done work for me on several of my homes.  In each case he was within the budget, on time and did a stellar job.  Very much would recommend!" />
      </Row>
    </Col>
  </Row>
  </section>
)


const BigOhioSection = ()=>(<div><Container fluid>
    <header>
      <h3><em>Serving Lake County &amp; North-Eastern Ohio</em></h3>
    </header>
    <Row>
      <div className="ohio-gps dark">
        <Ohio />
      </div>
    </Row>
</Container><LeafsHr /></div>)

const CallNow = ()=>(<div style={{ textAlign: "center" }}>
  <a className="btn btn-primary btn-lg" 
    alt="Call Now"
    href={`tel:${phoneNumber}`}
    style={{color: '#FFF', display: '' }}
    role="button">Call Now &raquo;</a>
</div>)

const Cards = ()=>{ 
  const props = { };
  return (<div className='pay'>
    <Visa className='pay-visa' {...props } />
    <Mastercard className='pay-master' {...props } />
    <Amex className='pay-amex'{ ...props } />
    <Paypal  className='pay-paypal'{ ...props} />
  </div>)
}



//const SlidingText = (...words) => (<div className="slidingVertical">{words.map(w=><span>{w}</span>)}</div>)

const Heart = () => (<img src={heart} alt="love" className="love" style={{ width: '100px', color: 'red', height: '100px' }}/>)

const PaymentTypes = ()=> (<div className="payment-types"><Cards /></div>)

const Steven = () => (<img src={steven} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);

//stevenTruck
const CircleImg = ({ src }) => (<img src={src} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);

const Map = () => (<img src={map} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);


const LeafsHr = (props)=> (<LeafHr
  { ...props }
  img={ leafs } 
  imgStyle={ { ...props.imgStyle, width: '40px'} }
/>)

const LeafHr = ({ style, imgStyle, img = leaf }) => (
  <div className="leaf-hr" style={ { ...style } }>
    <img src={img}  style={ { ...imgStyle } } />
  </div>
)

const Quote = ({ text, author, img })=> (
  <Col  lg={4} md={6} xs={12}>
    <div itemscope itemtype='http://schema.org/Review' className='quote-container'>
      <span itemprop="itemReviewed" itemscope itemtype="http://schema.org/LocalBusiness">
        <meta itemprop="name" content="Lawn-And-Order" />
      </span>
      <blockquote className="quoteblock">
        <div itemprop="description" className="review-block">
          <div property="content:encoded">
            <p className="review-text">{ text }</p>
          </div>
        </div>
        <footer>
          <div className="author-img" style={{ backgroundImage: `url(${img})`}} />
          <div itemprop="author">{ author }</div>
          <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
            <meta itemprop="worstRating" content="1" />
            <div itemprop="ratingValue" content="5" class="rating">
              <Fivestars />
            </div>
            <meta itemprop="bestRating" content="5" />
          </div>
        </footer>
      </blockquote>
    </div>
  </Col>)

const PCent = ({ children, style }) => (<p style={ { ...style, textAlign: "center" } }>{ children }</p>)

const Cent = ({ children, style }) => (<div style={{ ...style, textAlign: "center" }}>{ children }</div>)

const Fivestars = ()=> (<div className="stars"> {  (Array(5).fill(0)).map(i=>(<img src={star} />)) }</div>)

const Service = ({ icon, children }) => (<Col lg={2} md={4} >
  <div>
    <Icon src={icon} s={0.85}/>
    <h4>{ children }</h4>
  </div>
  </Col>)

const Page = () => (
  <div>
    <a href={`tel:${phoneNumber}`} className="callNow">
      <PhoneHandset/>
    </a>
    <main role="main" id="home">
      <div  className="jumbotron">
        <Container >
          <VertCentRow  style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <Col className="pitch-head">
              <h1 className="pitch"> We <Heart/> grass!</h1>
            </Col>
          </VertCentRow>
        </Container>
        <div className="sub-pitch">
          <div className="serving">
            <div className="ohio-gps light serve-state" ><Ohio/></div>
            <h2><em>&mdash; Providing  service for business and residential lawn care and landscaping needs to Mentor, Lake County and North Eastern Ohio</em></h2>
          </div>
          <CallNow />
          <a className="phone-number mobile-hide" href={`tel:${phoneNumber}`}>
            <em className="mobile-hide">Booking now for 2018!</em>
            <em className="mobile-show">{phoneNumber}</em>
          </a>

        </div>

      </div>

      <Container fluid>
        <section>
          <header>
            <h3 className="centered">Meet Our 5 Star Services</h3>
          </header>
          <Row className="service-icons" >
            <Service icon={ grass }>Lawn Care</Service>
            <Service icon={ leaves }>Autumn Clean up</Service>
            <Service icon={ leafs }>Spring Spruce up</Service>
            <Service icon={ flowers }>Flower Bedding</Service>
            <Service icon={ scissors }>Trimming &amp; Pruning</Service>
            <Service icon={ thumb }>And More!</Service>
          </Row>
        </section>
        <LeafHr />
        <Testimony />
        <LeafHr />
        <section>
          <Row className="payment-section">
            <Col xs={12}>
              <section>
                <header>
                  <h3 className="centered">Quick and Easy online electronic billing</h3>
                </header>
                <div className="i-email">
                  <EmailIcon/>
                </div>
                <PaymentTypes />
                <span className="pay-pitch"><em>Ask about our discount plans!</em></span>
              </section>
            </Col>
          </Row>
        </section>
        <LeafsHr />
        <section>
          <Row className="aboutus">
            <Col xs={12}>
              <header>
                <h3 className="centered">Meet your neighborhood lawn care specialist</h3>
              </header>
              <div className="mrceo">
                <Row>
                  <Col xs={12}>
                    <div className="img" style={{ backgroundImage: `url(${steven})` }} />
                  </Col>
                </Row>
                <h4> Steven Slaminka, Lawn and Order CEO </h4>
                <Row>
                  <Col md={ { size: 6, offset: 3 } }  xs={12} >
                    <p>
                      "It is our mission at Lawn and Order Landscaping to create satisfied customers by delivering superior service, quality products along with integrity and 100% customer satisfaction."
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </section>

        <LeafHr />
        <section id="contact-us">
          <br />
          <br />
          <Row className="contact">
            <Col xs={12}>
              <h3 className="centered">Estimates / Careers / Contact Us</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="contact-icons">
              <a alt="Email Us" href={`mailto:${emailContact}`}><Email className="email icon" /></a>
              <a alt="Facebook Page" href={facebookURL}><FBook className="fbook icon" /></a>
              <a alt="Call Now" href={`tel:${phoneNumber}`}><PhoneHandset className="phone icon" /></a>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 5, offset: 4 }} xs={12}>
              <span>&mdash; We are available by telephone - M-F 9am-5:30pm</span>
              <ul>
                <li><em>Call us @ <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></em></li>
                <li><a href={facebookURL}>Find us on Facebook</a></li>
                <li>Email anytime &mdash; <a href={`mailto:${emailContact}`}>{ emailContact }</a></li>
                <li>You may also fill out the form below and we will get try to get back to you within 24hrs.</li>
              </ul>
            </Col>
          </Row>
          <LeafsHr style={{ background: 'initial' }}/>
          <Row>
            <Col xs={12} md={{ size: 6, offset: 3}}>
              <ContactForm />
            </Col>
          </Row>
        </section>
  </Container>

</main>
<footer className="mainFooter"></footer>
  </div>
);


export default Page ;
