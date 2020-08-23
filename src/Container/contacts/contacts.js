import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import { NavLink } from "react-router-dom";

export default function contacts(props) {
  return (
    <div className="Main">
      <Header history={props.history} />
      <Container className="pt-5">
        <ListGroup>
          <ListGroup.Item>
            Тел.1 : <NavLink to="#">+#######</NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            Тел.2 : <NavLink to="#">+#######</NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            Instagram : <NavLink to="#">+#######</NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            telegram : <NavLink to="#">+#######</NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            facebook : <NavLink to="#">+#######</NavLink>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}
