import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { shallow } from "enzyme";
import Header from "./components/Header"

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

 
  expect(getByText(/learn/i)).toBeInTheDocument();
});

 test("Check if header exists in app", () => {
   const wrapper = shallow(<Header />);
   expect(wrapper.find("#myHeader"))
 });