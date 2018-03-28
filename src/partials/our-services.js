
import React from 'react';
import thumb from '../img/thumbsup-mono.svg';

const serviceCardData = [
  { text:"Mowing" , subtext:"Weekly, Bi-Weekly & Monthly scheduling available"  },
  { text:"Landscaping" , subtext:"Let us add the nice touch" },
  { text:"Spring & Fall cleanup" , subtext:"Leaves and such" },
  { text:"Tree trimming and Pruning" , subtext:"Branches mannnn...."  },
  { text:"Call now!"  }];


const ServiceCard  = ({ style, text, subtext }) =>(

  <div style={style} className="service-card">
    <h4>{ text }</h4>
    <br/>
    <span>{ subtext }</span>
  </div>
)

export default () => (<Row>
  <Col className="column2 section2">
    <section>
      <h3 className="section-head">
        <TinyIcon src={thumb}  />
        <span className="section-title" >Our services include ...</span>
      </h3>

      <div className="service-cards">
        { serviceCardData.map(ServiceCard) } 
      </div>
    </section>
  </Col>
</Row>)
