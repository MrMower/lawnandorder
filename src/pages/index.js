import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
// import Ohio from '../img/ohio.svg'
import steven from '../img/steven-md.jpg';
import map from '../img/greenmap2.jpg';
import wood from '../img/wood.jpg';
import lawn from '../img/manicured-lawn1.jpg';
import heart from '../img/heart.svg'
import leaves from '../img/leaves.svg';
import grass from '../img/grass.svg';
import thumb from '../img/thumbsup.svg';

import { green } from '../styles/colors';
import { VertCentRow, Icon } from '../shared';



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
              style={{color: '#FFF', display: 'none' }}
              role="button">Learn More &raquo;</a>
          </div> 
        </div>

    </div>

    <div className="container">
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-md-4 ">
          <div>
            <Icon src={grass} />
            <h2>Lawn Care</h2>
          </div>
        </div>
        <div className="col-md-4 " >
          <div>
            <Icon src={leaves} />
            <h2>Autumn Clean up</h2>
          </div>
        </div>
        <div className="col-md-4 ">
          <div>
            <Icon src={thumb} />
            <h2>And More!</h2>
          </div>
        </div>
      </div>

      <hr />

    </div>

  </main>
);

export default Page;
