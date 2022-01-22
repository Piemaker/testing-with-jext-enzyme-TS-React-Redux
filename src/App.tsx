
import './App.css';
import { Container,Row, Col } from 'react-bootstrap';
import Header from './components/Header';
function App() {
  return (
   <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col>
         <Header></Header>
        </Col>
      </Row>
      </Container>
  );
}

export default App;
