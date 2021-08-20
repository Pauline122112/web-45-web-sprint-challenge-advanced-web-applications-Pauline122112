import React from 'react'
import userEvent from "@testing-library/user-event"
import EditMenu from "./EditMenu";
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';


//Testing colorList and making sure that it renders
const testColor = {
	color: "blue",
	code: { hex: "#7fffd4" },
	id: 1,
};
const noColor = []

test("Renders an empty list of colors without errors", () => {
	//Arrange
	render(<ColorList color={noColor} />);
});

test("Renders a list of colors without errors", () => {
	//Arrange
	render(<ColorList color={testColor} />);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
	//Arrange
	const toggleEdit = jest.fn();
	render(<ColorList color={testColor} />);
	//Act
	let editing = screen.queryByTestId("color");
	userEvent.click(editing);
	//Assert
	expect(toggleEdit).toBeCalled();
});
