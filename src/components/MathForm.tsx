import React, {useState} from 'react';
import { Form, Button, Dropdown, DropdownButton, Col, Row, ButtonGroup} from 'react-bootstrap';
import { getValue, getMessage, add, sub, mul, div } from '../features/math/mathFormSlice';
import { useAppDispatch, useAppSelector } from "../app/hooks";
export default function MathForm() {
    const [operation,setOperation] = useState("");
    const [input1,setInput1] = useState<number>(0);
    const [input2, setInput2] = useState<number>(0);
    const value = useAppSelector(getValue);
    const message = useAppSelector(getMessage);
    const dispatch = useAppDispatch();
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(input1 !== null && input2 !==null && operation !== null){

        const payload = {in1 : input1, in2: input2};
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
      
    }
  return (
    <Form as={Row}>
      <Form.Group as={Col} sm="5" className="mb-3" controlId="firstInput">
        <Form.Label>Input1</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number"
          required
          value={input1}
          onChange={(e) => setInput1(parseFloat(e.target.value))}
        />
        <Form.Text className="text-muted">First Number of Operation</Form.Text>
      </Form.Group>
      <Form.Group as={Col} sm="2" className="align-self-center" required>
        <DropdownButton
          onSelect={(e) => setOperation(e)}
          id="operation"
          title="Operation"
        >
          <Dropdown.ItemText>Choose Operation</Dropdown.ItemText>
          <Dropdown.Item eventKey="Add">Add</Dropdown.Item>
          <Dropdown.Item eventKey="Sub">Sub</Dropdown.Item>
          <Dropdown.Item eventKey="Mul">Mul</Dropdown.Item>
          <Dropdown.Item eventKey="Div">Div</Dropdown.Item>
        </DropdownButton>
        <Form.Label className="mt-1">{operation}</Form.Label>
      </Form.Group>

      <Form.Group as={Col} sm="5" className="mb-3" controlId="secondInput">
        <Form.Label>Input2</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number"
          required
          value={input2}
          onChange={(e) => setInput2(parseFloat(e.target.value))}
        />
        <Form.Text className="text-muted">Second Number of Operation</Form.Text>
      </Form.Group>
      <Col sm="6" className="m-auto mt-5 mb-5">
        <ButtonGroup className="d-flex">
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </ButtonGroup>
      </Col>
      <Row>
        <Col sm="6" className="m-auto mt-5 mb-5">
          <p>{message}</p>
          <h2>{value}</h2>
        </Col>
      </Row>
    </Form>
  );
}
