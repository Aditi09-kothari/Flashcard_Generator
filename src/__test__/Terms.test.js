import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import user from "@testing-library/user-event";
import Terms from "../Components/CreateNew/Terms";
import { Formik } from "formik";
import { initialValues } from "../components/CreateNew/initialValues";

describe("Terms - Add More Check", () => {
  render(
    <Provider store={store}>
      <Formik initialValues={initialValues}>
        <Terms />
      </Formik>
    </Provider>
  );

  it("should add more input fields on click of add more button", async () => {
    user.click(screen.getByText(/add terms/i));

    await waitFor(() => {
      expect(screen.getAllByPlaceholderText(/term/i)).toHaveLength(4);
    });
  });
});
