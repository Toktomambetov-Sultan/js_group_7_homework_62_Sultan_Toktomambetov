import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import "./home.css";
export default function home(props) {
  console.log(props);
  return (
    <div className="Home">
      <Header history={props.history} />
      <div className="main-block">
        <Container>
          <h3>Очки на заказ</h3>
          <p>
            Наша компании на рынке более 5 лет.
          </p>
        </Container>
      </div>
      <div className="border bg-success text-white pt-5 text-center">
        <Container>
          <h3 className="text-warning pb-4">Почему мы?</h3>
          <Row>
            <Col xs={12} md={4} className="pb-3 ">
              <h4>Быстро</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus optio laborum, suscipit provident minus repudiandae,
                rem sunt sint maiores quidem consequuntur, ducimus repellat cum?
                Earum voluptates a nemo ad maxime.
              </p>
            </Col>
            <Col xs={12} md={4} className="pb-3 ">
              <h4>Качественно</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus optio laborum, suscipit provident minus repudiandae,
                rem sunt sint maiores quidem consequuntur, ducimus repellat cum?
                Earum voluptates a nemo ad maxime.
              </p>
            </Col>
            <Col xs={12} md={4} className="pb-3 ">
              <h4>Не дорого</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus optio laborum, suscipit provident minus repudiandae,
                rem sunt sint maiores quidem consequuntur, ducimus repellat cum?
                Earum voluptates a nemo ad maxime.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
