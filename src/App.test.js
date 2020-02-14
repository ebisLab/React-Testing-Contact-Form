import React from "react";
import {render, getByText ,queryByLabelText,fireEvent, waitForElement} from '@testing-library/react';
import App from "./App";
import 'mutationobserver-shim';
import ContactForm from './components/ContactForm';

// test("renders App without crashing", () => {
//   render(<App />);
// });


test('Contact form renders correctly', () => {
  //Arrange menatlity 
  const { getByText } = render(<ContactForm />);

  //Act
  const text = getByText(/First Name/i); //i  ==> case insensitive

  //Assert
  expect(text).toBeInTheDocument();
  // expect(header).toBeTruth();
  // expect(header).toBeFalsy();
});

test('first name, last name, email and message inputs are rendered ', () => {
  const {queryByLabelText} = render(<ContactForm />);

  queryByLabelText(/first name/i);
  queryByLabelText(/last name/i);
  queryByLabelText(/email/i);
  queryByLabelText(/message/i);
})

test('form submit adds new user to to the list ', async () => {
  const {getByLabelText, getByText, getByTestId, waitForElement} =  render(<ContactForm/>);
  
  // capturing all of our inputs -- qeurying for all the input nodes
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  // const messageInput = getByLabelText(/message/i);

  //use the change event to add text to each input
  fireEvent.change(firstNameInput, {target: {value: 'Test Species'}})
  fireEvent.change(lastNameInput, {target: {value: 'Test Age'}})
  fireEvent.change(emailInput, {target: {value: 'Test email'}})
  // fireEvent.change(messageInput, {target: {value: 'Test note'}})

  expect(firstNameInput.value).toBe('Test Species');
  expect(lastNameInput.value).toBe('Test Age');
  expect(emailInput.value).toBe('Test email');
  // expect(messageInput.value).toBe('Test note');

  //click on the button
  // fireEvent.click(getByTestId("submit"));

  // await waitForElement(() => queryByLabelText(<pre></pre>)// query for the <pre> element);

  
  
  // //assert that the species is added to the list
  // const userText = getByText(/test species/i);
  // expect(userText).toBeInTheDocument();
  
  })
