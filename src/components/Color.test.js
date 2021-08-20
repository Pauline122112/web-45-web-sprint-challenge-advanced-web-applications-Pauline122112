import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

const testColor = {
	color: "blue",
	code: { hex: "#7fffd4" },
	id: 1,
};

test("Renders without errors with blank color passed into component", () => {
	render(<Color color={testColor} />);
});

test("Renders the color passed into component", () => {
	//Arrange
	render(<Color color={testColor} />);
	//Act
	const color = screen.queryAllByTestId("color");
	//Assert
	expect(color).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
	//Arrange
    const handleDelete = jest.fn();
	const toggleEdit = jest.fn();
	const deleteKey = screen.getByTestId("delete");
    //Act
	render(<Color color={testColor} />);
	userEvent.click(deleteKey);

    //Assert
	expect(handleDelete).toBeCalled();
	expect(toggleEdit).toBeCalled();
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
	//Arrange
	const setEditColor = jest.fn();
	const toggleEdit = jest.fn();
	const colorKey = screen.getByTestId("color");
	//Act
	render(<Color color={testColor} />);
	userEvent.click(colorKey);
	//Assert
	expect(setEditColor).toBeCalled();
	expect(toggleEdit).toBeCalled();
});
