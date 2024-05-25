# Super Cheeseria
---

## Problem and Solution

The problem addressed by this project is the need for a small proof of concept (POC) showcasing CRUD capabilities for managing a selection of cheeses with associated details such as pictures, price per kilo, and color. Additionally, an optional feature includes a calculator to determine the total price based on the weight of the selected cheese.

## Solution Focus

The primary focus of this solution is to provide a user-friendly interface for managing and viewing cheese information while ensuring seamless interaction between the front-end and back-end components.

## Concept and Rules

Build a small POC of the front-end and an API showing CRUD capabilities that display 5 different cheeses with pictures, price per kilo, and cheese color. This data should reside within the backend (API) of the app. As an optional addition, we would like to offer a calculator that allows our customers to select a particular type of cheese and show them the total price based on the weight they're interested in.

## Technical Choices and Architecture

#### Back-End

The back-end of the application is implemented using ASP .NET Core, providing a robust framework for building RESTful APIs. This choice ensures scalability, security, and performance for handling CRUD operations and managing cheese data.

#### Front-End

The front-end is developed using React.js, a popular JavaScript library for building user interfaces. React.js offers a component-based architecture, facilitating the creation of reusable UI components and enhancing the overall development experience.

#### Architectural Reasoning

The chosen architecture separates concerns between the front-end and back-end components, enabling independent development and scalability. The use of RESTful APIs ensures interoperability and flexibility in integrating additional features or extending functionality in the future.

## Solution Structure

| Main Projects               | Description                                                            |
| --------------------------- | ---------------------------------------------------------------------- |
| SuperCheeseria.Server	      | ASP .NET Core API project for managing cheese data and CRUD operations |
| supercheeseria.client	      | React.js front-end project for displaying cheese information           |

> For larger-scale projects, we might consider a more modular approach. SuperCheeseria.Core could serve as the foundational layer, managing essential business logic and domain models.
> Meanwhile, SuperCheeseria.Data could handle data access and persistence, ensuring seamless interactions with the underlying database. This separation of concerns enhances maintainability and scalability, allowing for easier management and evolution of the application over time.

| Test Projects               | Description                     |
| --------------------------- | ------------------------------- |
| SuperCheeseria.Server.Tests |	Unit tests for the API project. |

> Due to time constraints, Jest for client-side testing wasn't implemented, though it offers robust capabilities for React testing.

### Design Pattern

The solution follows a modular and component-based design pattern, leveraging the strengths of React.js for building reusable UI components and ASP .NET Core for implementing scalable and maintainable APIs.

## Code Quality

- The code follows SOLID principles, ensuring that each class and method has a single responsibility. Consistent naming conventions and clear separation of concerns are maintained throughout the project.
- Code quality is maintained through adherence to industry best practices, including proper documentation, code formatting, and unit testing.
- Continuous integration and automated testing pipelines can further enhance code quality and ensure robustness.

## Future Improvements

- Future improvements could include enhancing UI/UX design, implementing additional features such as user authentication, shopping cart, using SQL or NoSQL databases and optimizing performance for larger datasets.
- Basic error handling has been implemented, particularly for the development environment. However, for production readiness, more comprehensive logging and monitoring should be added. 
- The application assumes a trusted environment, performing critical operations on the server and validating data received from the client would enhance security and prevent potential vulnerabilities.

## Getting Started

### Prerequisites

- Node.js
- React.js
- .NET Core SDK

## Small Print

- **Author:** [Rodrigo Eduardo Boni](https://www.linkedin.com/in/rodrigoeduardoboni/)
- **License:** MIT - feel free to play with it!