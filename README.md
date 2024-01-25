# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Multi-Step Form with Validation using React

This project implements a multi-step form with validation using React. The form guides users through several steps, with each step having its own set of form fields. Validation logic is implemented for each field, providing meaningful error messages for invalid inputs.

## Requirements

1. **Number of Steps:** The form should have a minimum of three steps.
2. **Form Fields:** Each step includes a set of form fields relevant to that step.
3. **Validation Logic:** Client-side validation is implemented for the form fields. Error messages are provided for invalid inputs. Validation includes required fields, email formats, numeric inputs, etc.
4. **Navigation:** Navigation buttons allow users to move between steps. Users can go back to the previous step and proceed to the next step. The "Next" button is disabled if the current step has validation errors.

## Form Fields

### Step 1: Personal Information

- Full Name (text input)
- Email Address (email input)
- Date of Birth (date input)

### Step 2: Address Information

- Street Address (text input)
- City (text input)
- State (dropdown/select input)
- Zip Code (numeric input)

### Step 3: Account Setup

- Username (text input)
- Password (password input)
- Confirm Password (password input)

## Validation Logic

1. **Full Name:** Required, minimum length 3 characters.
2. **Email Address:** Required, must be a valid email format.
3. **Date of Birth:** Required, must be a valid date.
4. **Street Address:** Required, minimum length 5 characters.
5. **City:** Required, minimum length 3 characters.
6. **State:** Required (selected from the dropdown).
7. **Zip Code:** Required, must be a valid numeric format.
8. **Username:** Required, minimum length 3 characters.
9. **Password:** Required, minimum length 6 characters.
10. **Confirm Password:** Required, must match the password field.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


