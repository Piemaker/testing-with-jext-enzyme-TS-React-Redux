import React, {useState} from 'react';
import { Form, Button, Dropdown, DropdownButton, Col, Row, ButtonGroup, Container} from 'react-bootstrap';
import { getValue, getMessage, add, sub, mul, div } from '../../features/math/mathFormSlice';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
export default function MathForm() {
  const [operation, setOperation] = useState("");
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const value = useAppSelector(getValue);
  const message = useAppSelector(getMessage);
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1 !== null && input2 !== null && operation !== null) {
      const payload = { in1: input1, in2: input2 };
      // dispatch action
      switch (operation) {
        case "Add":
          dispatch(add(payload));
          break;
        case "Sub":
          dispatch(sub(payload));
          break;
        case "Mul":
          dispatch(mul(payload));
          break;
        case "Div":
          dispatch(div(payload));
          break;
      }
    }
  };
  return (
    <Container>
      <Row>
        <Col lg="8" className="shadow pt-5 rounded m-auto">
          <Form as={Row}>
            <Form.Group as={Col} sm="4" className="mb-3" controlId="firstInput">
              <Form.Label>Input1</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number"
                required
                value={input1}
                onChange={(e) => setInput1(parseFloat(e.target.value))}
              />
              <Form.Text className="text-muted">
                First Number of Operation
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} sm="4" className="d-flex justify-content-center align-items-center" required>
              <DropdownButton
                onSelect={(e) => setOperation(e)}
                  id="operation"
                title="Operation"
              >
                <Dropdown.ItemText data-testId = "options">Choose Operation</Dropdown.ItemText>
                <Dropdown.Item data-testId = "options-add" eventKey="Add">Add</Dropdown.Item>
                <Dropdown.Item data-testId = "options-sub" eventKey="Sub">Sub</Dropdown.Item>
                <Dropdown.Item data-testId = "options-mul" eventKey="Mul">Mul</Dropdown.Item>
                <Dropdown.Item data-testId = "options-div" eventKey="Div">Div</Dropdown.Item>
              </DropdownButton>
              <Form.Label className="mt-1">{operation}</Form.Label>
            </Form.Group>

            <Form.Group
              as={Col}
              sm="4"
              className="mb-3"
              controlId="secondInput"
            >
              <Form.Label>Input2</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number"
                required
                value={input2}
                onChange={(e) => setInput2(parseFloat(e.target.value))}
              />
              <Form.Text className="text-muted">
                Second Number of Operation
              </Form.Text>
            </Form.Group>
            <Col sm="6" className="m-auto mt-5 mb-2">
              <ButtonGroup className="d-flex">
                <Button onClick={handleSubmit} variant="primary" type="submit">
                  Submit
                </Button>
              </ButtonGroup>
            </Col>
            <Row>
              <Col sm="6" className="m-auto mt-5 mb-5 text-center">
                <p>{message}</p>
                <h2 data-testId = "output">{value}</h2>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
