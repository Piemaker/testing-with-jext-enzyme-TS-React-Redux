import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import MathForm from "../MathForm"
import {store} from "../../../app/store";
let MockMathForm = () => {
  return (
    <Provider store = {store}>
    <MathForm></MathForm>
    </Provider>
  );
};
describe("<MathFrom />", () => {
  // const wrapper = shallow(<MockMathForm/>);
  let input1;
  let input2;
  let operation;
  let submitButton;
  beforeEach(() => {
    render(<MockMathForm />);
    input1 = screen.getByRole("spinbutton", { name: /input1/i });
    input2 = screen.getByRole("spinbutton", { name: /input2/i });
    operation = screen.getByRole("button", { name: /operation/i });
    submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
  });
  test("Check if first input exists in app", () => {
    // expect(wrapper.find("#firstInput").exists()).toBeTruthy();
    expect(input1).toBeInTheDocument();
  });

  test("Check if second input exists in app", () => {
    // expect(wrapper.find("#firstInput").exists()).toBeTruthy();
    // expect(wrapper.find("#secondInput").exists()).toBeTruthy();
    expect(input2).toBeInTheDocument();
  });

  test("Check if operator input exists in app", () => {
    // expect(wrapper.find("#operation").exists()).toBeTruthy();
    expect(operation).toBeInTheDocument();
  });
  test("Check if input 1  value is displayed as it should", () => {
    act(() => {
      fireEvent.change(input1, { target: { value: "4" } });
    });
    expect(input1.value).toBe("4");
  });
  test("Check if input 2 value is displayed as it should", () => {
    act(() => {
      fireEvent.change(input2, { target: { value: "4" } });
    });
    expect(input2.value).toBe("4");
  });
  test("Check if output value is displayed as it should", () => {
    act(() => {
      fireEvent.change(input1, { target: { value: "4" } });
      fireEvent.change(input2, { target: { value: "4" } });
    });
    fireEvent.click(operation);
    // without clicking the operation button the options won't appear
    let operationAdd = screen.getByTestId("options-add");
    act(() => {
      fireEvent.click(operationAdd);
    });
    fireEvent.click(submitButton);

    let output = screen.getByTestId("output");
    expect(output.innerHTML).toBe("8");
  });
});
