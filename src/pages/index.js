import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Link from 'gatsby-link';
// import Ohio from '../img/ohio.svg'
import steven from '../img/steven.jpg';
import wood from '../img/wood.jpg';
import heart from '../img/heart.svg'
import leaves from '../img/leaves.svg';
import grass from '../img/grass.svg';
import thumb from '../img/thumbsup.svg';



const green = '#3d7936';
const VertCenterRow = ({children}) => (<Row
  style={{
    display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: '50px',
  }}
>{ children }</Row>)

const SlidingText = (...words) => (<div className="slidingVertical">{words.map(w=><span>{w}</span>)}</div>)

const H = () => (<img src={heart} style={{ width: '100px', height: '100px' }} alt="<3"/>)

const Steven = () => (<img src={steven} style={{ maxWidth: 'initial', width: '250px', height: '250px', borderRadius: '50%' }} />);

const Pitch = ({ children }) => (<h1 className="display-3" style={{ textAlign: 'center', color: green, fontStyle: 'italic', whiteSpace: 'nowrap', marginLeft: '-15px' }}>{ children }</h1>);

const ParaCent = ({ children, style }) => (<p style={ { ...style, textAlign: "center" } }>{ children }</p>)

const Center = ({ children, style }) => (<div style={{ ...style, textAlign: "center" }}>{ children }</div>)

const LearnMore = ({ text }) => (<ParaCent style={{ textAlign: 'center' }}><a className="btn btn-primary btn-lg" href="#" style={{color: '#FFF' }}role="button">{ text }</a></ParaCent>)

const SubPitch = ({ children }) => (<ParaCent style={{ fontSize: '1.25rem', fontWeight: 'bold', textShadow: "1px 1px #FFF" }}>{ children }</ParaCent>)

const Leaves = () => (<img style={{ textAlign: 'center', width: '150px', height: '150px' }} src={leaves} />);

const Grass = () => (<img style={{ textAlign: 'center', width: '150px', height: '150px' }} src={grass} />);

const Icon = ({ src }) => (
  <div style={{ textAlign: 'center', width: '100%' }}>
    <img style={{ textAlign: 'center', width: '150px', height: '150px' }} src={src} />
  </div>) 

const Page = () => (
  <main role="main">

    <div className="jumbotron" style={{backgroundImage: `url(${wood})` }}>
      <Container >
        <VertCenterRow>
          <Col>
            <Steven />
          </Col>
          <Col>
            <Pitch> We <H/> grass!</Pitch>
          </Col>
        </VertCenterRow>
        <SubPitch style={{ textShadow: '3px 3px ' }}>It is our mission to create satisfied customers by delivering superior service, quality products along with integrity and 100% customer satisfaction.</SubPitch>
        <LearnMore text="Learn more &raquo;" />
      </Container>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-4 ">
          <Center>
            <Icon src={grass} />
            <h2>Lawn Care</h2>
          </Center>
        </div>
        <div className="col-md-4 " >
          <Center>
            <Icon src={leaves} />
            <h2>Autumn Clean up</h2>
          </Center>
        </div>
        <div className="col-md-4 ">
          <Center>
            <Icon src={thumb} />
            <h2>And More!</h2>
          </Center>
        </div>
      </div>

      <hr />

    </div>

  </main>
);

export default Page;
