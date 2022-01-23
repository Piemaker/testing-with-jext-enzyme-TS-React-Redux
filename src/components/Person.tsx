import React from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  Col,
  Row,
  Container,
} from "react-bootstrap";
interface Props {
    gender : string;
    email : string;
    name : string;
    picture?: string;
}
export  const Person: React.FC <Props> = ({email,gender,name,picture}) => {
  return (
    <Container>
      <Row className="justify-content-center text-center mt-5 shadow rounded p-5">
        <Col>
          <img
            style={{ borderRadius: "50%" }}
            className="img-fluid img-circle shadow"
            src={picture}
            alt={name}
          />
          <h2 className="display-5 font-weight-bold">{name}</h2>
          <p className="font-weight-light display-6">{gender}</p>
          <p className='display-6'>{email}</p>
        </Col>
      </Row>
    </Container>
  );
}
