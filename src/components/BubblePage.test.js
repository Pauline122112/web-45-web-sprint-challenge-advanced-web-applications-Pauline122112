import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorServices from "../services/fetchColorService"

jest.mock("../services/fetchColorService");

const testColor = {
	color: "blue",
	code: { hex: "#7fffd4" },
	id: 1,
};


//Provide rendering of the BubblePage function
test("Renders without errors", ()=> {
    
    render(<BubblePage />)

});


    //fetchColorService is called on mount for this component.
test("Renders appropriate number of colors passed in through mock", async ()=> {
	//Arrange
	fetchColorServices.mockResolvedValueOnce(testColor);
	//Act
	render(<BubblePage />);
	const colors = screen.getAllByTestId("color");
	//Assert
	await waitFor(() => {
		expect(colors).toHaveLength(1);
	});
});