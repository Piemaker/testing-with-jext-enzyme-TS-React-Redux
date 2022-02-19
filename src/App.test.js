import { fireEvent, render, screen } from "@testing-library/react";
import { store } from "./app/store";
import App from "./App";
import { shallow } from "enzyme";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// * jest-fetch-mock
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

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
  // ! IMPLEMENTATION WITH FETCH SPY
  // const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
  //   Promise.resolve({
  //     json: () =>
  //       Promise.resolve({
  //         results: [
  //           {
  //             name: { first: "Omar", last: "Sayed" },
  //             picture: {
  //               large: "./test-img-large.jpg",
  //             },
  //             gender: "male",
  //             email: "brad.gibson@example.com",
  //           },
  //         ],
  //       }),
  //   })
  // );
  // ! IMPLEMENTATION WIH MANUAL FETCH MOCKING
  //  const originalFetch = global.fetch;
  // beforeAll(()=>{
  //   // Mock fetch
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () =>
  //         Promise.resolve({
  //           results: [
  //             {
  //               name: { first: "Omar", last: "Sayed" },
  //               picture: {
  //                 large: "./test-img-large.jpg",
  //               },
  //               gender: "male",
  //               email: "brad.gibson@example.com",
  //             },
  //           ],
  //         }),
  //     })
  //   );
  // })
  // afterAll(()=>{
  //   global.fetch = originalFetch;
  // })
  // const wrapper = shallow(<MockApp />);
  beforeEach(() => {
    render(<MockApp />);
    //* jest-fetch-mock
    // fetch.resetMocks();
  });
  test("Check random user header contains valid text", () => {
    expect(
      screen.getByRole("heading", { name: /get random user/i })
    ).toBeInTheDocument();
  });
  test("When user clicks on get user it should display a single user", async () => {
    let getUserButton = screen.getByRole("button", {
      name: /get user/i,
    });
    fetch.mockResponseOnce(
      JSON.stringify({
        results: [
          {
            name: { first: "Omar", last: "Sayed" },
            picture: {
              large: "./test-img-large.jpg",
            },
            gender: "male",
            email: "brad.gibson@example.com",
          },
        ],
      })
    );

    fireEvent.click(getUserButton);

    // expect(fetchMock).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledTimes(1);

    // expect(fetch).toHaveBeenCalledWith("")
    // expect(fetch).toHaveReturnedWith({
    //   results: [
    //     {
    //       name: { first: "Omar", last: "Sayed" },
    //       picture: {
    //         large: "./test-img-large.jpg",
    //       },
    //       gender: "male",
    //       email: "brad.gibson@example.com",
    //     },
    //   ],
    // });
    let userEmail = await screen.findByText(/brad.gibson@example.com/i);
    expect(userEmail).toBeInTheDocument();
  });
});
