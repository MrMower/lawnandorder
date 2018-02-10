import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
import { VertCentRow, Icon } from '../../shared';
import leaves from '../../img/leaves.svg';
import grass from '../../img/grass.svg';
import thumb from '../../img/thumbsup.svg';

const LilIcon = ({ src, style }) => (
  <img style={{ ...style, borderRadius: "50%", border: "5px solid mintcream", padding: "5px", marginLeft: "1em", marginRight: "1em", width: '100px', height: '100px' }} src={src} />
)

module.exports = ()=>(
  <main role="main">
    <div style={{ paddingTop: '4em' }}>
      <Container>
        <VertCentRow>
          <h1 style={{ fontWeight: 400 }}>
            Services
          </h1>
          <h2 style={{ fontWeight: 250, padding: "1em", lineHeight: "1.5em" }}> We provide a range of services for your commercial and residential needs, no job is too big or too small</h2>
        </VertCentRow>
        <VertCentRow>
          <Col>
            <LilIcon src={grass} />
            <LilIcon src={thumb} />
            <LilIcon src={leaves} />
          </Col>
        </VertCentRow>
      </Container>
      <Container fluid={true} style={{ marginTop: "4em" }}>
        <Row>
          <Col style={{ background: "linear-gradient(to right, mintcream , white)" }} xs={12} sm={12} md={6}>
            <section style={{ padding: '10%' }}>
              <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                We specialize in
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ullamcorper eros. Quisque hendrerit, magna a condimentum dignissim, arcu nulla malesuada nulla, dignissim euismod urna quam quis ipsum. Aenean vulputate magna finibus, tincidunt mi vel, suscipit eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ut sollicitudin massa. Fusce tempor sagittis nibh, nec scelerisque ipsum malesuada eu. Donec et finibus nisi, a rutrum orci. Ut vel massa ut nulla pulvinar tincidunt at ut ante.</p>
              <p>
                Duis accumsan vestibulum ex, quis venenatis dolor semper nec. Quisque suscipit ex eu varius cursus. Integer egestas metus ac pellentesque dictum. Sed odio mauris, dictum ut felis ac, condimentum aliquam lectus. Aenean sagittis efficitur ligula nec malesuada. Morbi vel ex odio. Suspendisse imperdiet quis quam eu mattis.

              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ligula id magna laoreet dictum ac eu arcu. Nunc vitae ex purus. Maecenas posuere scelerisque lacus sit amet interdum. Curabitur congue suscipit arcu eget dignissim. Aliquam dolor nisl, interdum eu ante sed, cursus blandit nunc. Ut interdum sem elit, sed tincidunt tortor maximus nec.

              </p>
            </section>
          </Col>
          <Col xs={12} sm={12} md={6}>
            2.
          </Col>
        </Row>
      </Container>
    </div>
  </main>
)
