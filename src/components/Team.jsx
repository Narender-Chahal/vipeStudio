import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import team from "../assets/img/png/team.png";
function Team() {
  return (
    <section className="Longterm_section_bg py-lg-0 py-5">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          <Col md={6} className="pt-4 pt-md-0">
            {" "}
            <h2 className="ff_konexy fw-normal mb-0 fs_4xl text-black">
              Team Full of Stars{" "}
            </h2>
            <p className="mb-0 ff_GilroyRegular fw-normal fs_sm  clr_lightblack pt-2">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.
            </p>{" "}
            <button className="btn_modify mt-2 mt-md-4">Explore</button>
          </Col>
          <Col md={6}>
            <img className="w-100 transfrom_Yaxis" src={team} alt="team" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
