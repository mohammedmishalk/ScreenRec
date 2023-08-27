
# EventShop

**Project Description**: This project is a ticket booking application that allows users to book tickets with specific validations and restrictions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Validations](#validations)
- [Coupon Codes](#coupon-codes)
- [Ticket Quantity Limits](#ticket-quantity-limits)
- [Tech Stack](#tech-stack)

## Installation

To run the ticket booking application on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mohammedmishalk/EventShop.git
   cd EventShop
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to `http://localhost:5173/` to access the application.

## Usage

The ticket booking application provides an intuitive interface for users to book tickets. Here are the main features:

- Users can enter their first name, last name, and email, which are mandatory fields.
- The phone number is optional, and users can choose to provide it.
- The email structure is validated to ensure it is in the correct format.
- Ticket quantities can be adjusted using the '+' and '-' buttons for each ticket type.
- To proceed with the payment, users must accept the terms and conditions by ticking the checkbox.
- There are quantity limits for each ticket type: 'Ticket Number 1' can have a maximum of '3' tickets, and 'Ticket Number 2' can have a maximum of '5' tickets.

## Validations

The ticket booking application enforces the following validations:

- First name, last name, and email are mandatory fields and must be provided by the user.
- The email must be in a valid format (e.g., user@example.com).

## Ticket Quantity Limits

The application has specific quantity limits for each ticket type:

- Ticket Number 1: Maximum quantity allowed is 3 tickets.
- Ticket Number 2: Maximum quantity allowed is 5 tickets.

## Coupon Codes

Users can apply coupon codes to get discounts on the total ticket price. The current coupon code available is 'WELCOME10', which provides a 10% discount on the total ticket price.

To apply the coupon code:

- Enter the coupon code 'WELCOME10' in the designated coupon code field.
- Click the 'Apply' button.
- The discount will be applied, and the updated total ticket price will be displayed.
- Please note that only one coupon code can be applied per booking.

## Tech Stack

The EventShop ticket booking application utilizes the following technologies and libraries:

- **React**: The front-end of the application is built using React, a popular JavaScript library for building user interfaces.

- **Redux Toolkit**: For state management, Redux Toolkit is used. It simplifies the process of managing application state and helps to avoid common Redux boilerplate code.

- **Yup**: Yup is used for validation schema. It provides a simple and efficient way to validate form data.

- **Formik**: Formik is a library that is used to build and manage forms in React. It helps with handling form validation, submission, and form state.

- **React Toastify**: To display toast messages for user notifications, React Toastify is used. It offers customizable and attractive toast notifications.

- **Tailwind CSS**: Tailwind CSS is used for frontend design and styling. It is a utility-first CSS framework that provides pre-defined classes to style components quickly.

By combining these technologies and libraries, EventShop delivers a robust and user-friendly ticket booking application with smooth form validation, state management, and appealing UI design.

---
