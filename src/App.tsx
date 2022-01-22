
import './App.css';
import { Container,Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import MathForm from './components/MathForm';
function App() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center mb-5">
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
         <MathForm></MathForm>
         </Col>
      </Row>
    </Container>
  );
}

export default App;
