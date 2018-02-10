import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
// import Ohio from '../img/ohio.svg'
import steven from '../img/steven.jpg';
import wood from '../img/wood.jpg';
import heart from '../img/heart.svg'
import leaves from '../img/leaves.svg';
import grass from '../img/grass.svg';
import thumb from '../img/thumbsup.svg';

import { green } from '../styles/colors';
import { VertCentRow, Icon } from '../shared';



const SlidingText = (...words) => (<div className="slidingVertical">{words.map(w=><span>{w}</span>)}</div>)

const Heart = () => (<img src={heart} alt="love" style={{ width: '100px', height: '100px' }} alt="<3"/>)

const Steven = () => (<img src={steven} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);

const Pitch = ({ children }) => (<h1 className="display-3" style={{ textAlign: 'center', color: green, fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: '-15px' }}>{ children }</h1>);

const PCent = ({ children, style }) => (<p style={ { ...style, textAlign: "center" } }>{ children }</p>)

const Cent = ({ children, style }) => (<div style={{ ...style, textAlign: "center" }}>{ children }</div>)

const More = ({ text }) => (<PCent style={{ textAlign: 'center' }}><a className="btn btn-primary btn-lg" href="#" style={{color: '#FFF' }}role="button">{ text }</a></PCent>)

const SubPitch = ({ children }) => (<PCent style={{ fontSize: '1.25rem', fontWeight: 'bold', textShadow: "3px 3px #FFF" }}>{ children }</PCent>)


const Leaves = () => (<img style={{ textAlign: 'center', width: '150px', height: '150px' }} src={leaves} />);

const Grass = () => (<img style={{ textAlign: 'center', width: '150px', height: '150px' }} src={grass} />);


const H2 = ({ children, style })=> (<h2 style={{ ...style, fontWeight: 400 }}>{ children }</h2>) 

const Page = () => (
  <main role="main">

    <div className="jumbotron" style={{backgroundImage: `url(${wood})` }}>
      <Container >
        <VertCentRow>
          <Col>
            <Steven />
          </Col>
          <Col>
            <Pitch> We <Heart/> grass!</Pitch>
          </Col>
        </VertCentRow>
        <SubPitch >At Lawn and Order Landscaping, it is our mission to create satisfied customers by delivering superior service, quality products along with integrity and 100% customer satisfaction.</SubPitch>
        <More text="Learn more &raquo;" />
      </Container>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-4 ">
          <Cent>
            <Icon src={grass} />
            <H2>Lawn Care</H2>
          </Cent>
        </div>
        <div className="col-md-4 " >
          <Cent>
            <Icon src={leaves} />
            <H2>Autumn Clean up</H2>
          </Cent>
        </div>
        <div className="col-md-4 ">
          <Cent>
            <Icon src={thumb} />
            <H2>And More!</H2>
          </Cent>
        </div>
      </div>

      <hr />

    </div>

  </main>
);

export default Page;
