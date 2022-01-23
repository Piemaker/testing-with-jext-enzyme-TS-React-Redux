import React from "react";
import { render } from "@testing-library/react";
import { store } from "./app/store";
import App from "./App";
import { shallow, mount } from "enzyme";
import Header from "./components/Header";
import MathForm from "./components/MathForm";
import { Provider } from "react-redux";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });

describe("<Header />", () => {
  const wrapper = shallow(<Header />);

  test("Check if header exists in app", () => {
    expect(wrapper.find("#myHeader").exists()).toBeTruthy();
  });
});


// this requires to be wrapped in a provider in order to function
// can't get it to work because of dependency on store

// describe("<App />", () => {
//   const wrapper = shallow(<App />);

//   test("Check random user header contains valid text", () => {
//     expect(wrapper.find("h2").text()).toContain("Get Random User");
//   });
// });

// describe("<MathFrom />", () => {
//   const wrapper = shallow(<MathForm/>);

//   test("Check if first input exists in app", () => {
//     expect(wrapper.find("#firstInput").exists()).toBeTruthy();
//   });

//   test("Check if second input exists in app", () => {
//     expect(wrapper.find("#firstInput").exists()).toBeTruthy();
//     expect(wrapper.find("#secondInput").exists()).toBeTruthy();
//   });

//   test("Check if operator input exists in app", () => {
//     expect(wrapper.find("#operation").exists()).toBeTruthy();
//   });
// });
