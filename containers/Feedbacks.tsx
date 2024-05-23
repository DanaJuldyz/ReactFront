import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";

const Feedbacks = () => {
  return (
    feedbacks && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Feedbacks;
