import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import InputText from ".";
import { theme } from "../../../theme/default.theme";


describe("InputText Component", () => {
  let mockOnChangeText: jest.Mock;

  beforeEach(() => {
    mockOnChangeText = jest.fn();
  });

  it("should render correctly", () => {
    const { getByPlaceholderText } = render(<InputText placeholder="Email" error={null} onChangeText={mockOnChangeText} />);

    expect(getByPlaceholderText("Email")).toBeTruthy();
  });

  it("should apply the correct placeholder color", () => {
    const { getByPlaceholderText } = render(<InputText placeholder="Email" error={null} onChangeText={mockOnChangeText} />);

    const input = getByPlaceholderText("Email");
    expect(input.props.placeholderTextColor).toBe(theme.input.neutralGray);
  });

  it("should display the error message when there is an error", () => {
    const { getByText } = render(<InputText placeholder="Email" error={{ message: "Required field" }} onChangeText={mockOnChangeText} />);

    expect(getByText("Required field")).toBeTruthy();
  });

  it("should call onChangeText when typing", () => {
    const { getByPlaceholderText } = render(<InputText placeholder="Email" error={null} onChangeText={mockOnChangeText} />);

    const input = getByPlaceholderText("Email");
    fireEvent.changeText(input, "test@email.com");

    expect(mockOnChangeText).toHaveBeenCalledWith("test@email.com");
  });
});
