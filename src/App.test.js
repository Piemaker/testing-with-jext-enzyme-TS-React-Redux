import { render, screen } from "@testing-library/react";
import { store } from "./app/store";
import App from "./App";
import { shallow } from "enzyme";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let MockApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("<Header />", () => {
  const wrapper = shallow(<Header />);
  test("Check if header exists in app", () => {
    expect(wrapper.find("#myHeader").exists()).toBeTruthy();
  });
});

// this requires to be wrapped in a provider in order to function

describe("<App />", () => {
  // const wrapper = shallow(<MockApp />);
  test("Check random user header contains valid text", () => {
    render(<MockApp />);
    expect(
      screen.getByRole("heading", { name: /get random user/i })
    ).toBeInTheDocument();
  });
});

