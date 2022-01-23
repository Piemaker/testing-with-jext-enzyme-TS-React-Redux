
import './App.css';
import { Container,Row, Col, Button } from 'react-bootstrap';
import Header from './components/Header';
import MathForm from './components/MathForm';
import {Person} from './components/Person';
import { getPersons, fetchPerson , getStatus} from "../src/features/person/personReducer"
import { useAppDispatch, useAppSelector } from "../src/app/hooks";
function App() {
    const dispatch = useAppDispatch();
    const personsData = useAppSelector(getPersons);
    const status = useAppSelector(getStatus);
    let persons = personsData.map((person,index) => {
      const {name, gender , email,picture } = person.results[0];
       
      return (
     
 
            <Person
              key = {index}
              name={name.first}
              gender={gender}
              email={email}
              picture={picture.large}
            ></Person>
   
      );
    })
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center mb-5">
        <Col>
          <Header></Header>
        </Col>
      </Row>

      <MathForm></MathForm>
      <Row className="justify-content-center text-center mt-5">
        <Col className="m-auto">
          <h2 className = "display-5">Get Random User</h2>
          <Button onClick={() => dispatch(fetchPerson())}>Get User</Button>
        </Col>
      </Row>
      <ul>
        {status === "idle"?persons: <h2>...loading</h2>}
      </ul>
    </Container>
  );
}

export default App;
