import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../Components/Header/Header";

export default function about(props) {
  return (
    <div>
      <Header history={props.history} />
      <div className="pt-5">
        <Container>
          <h1>История 5 лет компании</h1>
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            obcaecati libero id, beatae perspiciatis earum fuga asperiores porro
            quisquam laudantium labore accusantium consequatur sequi rem
            adipisci tenetur harum iusto veritatis voluptatibus quia corporis
            at. Molestiae sit ducimus cupiditate, laudantium necessitatibus
            sequi corrupti harum facere beatae labore tempore illum ea
            blanditiis!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            obcaecati libero id, beatae perspiciatis earum fuga asperiores porro
            quisquam laudantium labore accusantium consequatur sequi rem
            adipisci tenetur harum iusto veritatis voluptatibus quia corporis
            at. Molestiae sit ducimus cupiditate, laudantium necessitatibus
            sequi corrupti harum facere beatae labore tempore illum ea
            blanditiis!
          </p>
          <img className="w-50 m-auto" src="https://primamedia.ru/f/big/1262/1261496.jpg" alt="123"/>
          <span>начало большего бизнесса</span> 
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            obcaecati libero id, beatae perspiciatis earum fuga asperiores porro
            quisquam laudantium labore accusantium consequatur sequi rem
            adipisci tenetur harum iusto veritatis voluptatibus quia corporis
            at. Molestiae sit ducimus cupiditate, laudantium necessitatibus
            sequi corrupti harum facere beatae labore tempore illum ea
            blanditiis!
          </p>
        </Container>
      </div>
    </div>
  );
}
