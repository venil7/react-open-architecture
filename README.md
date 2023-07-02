# React Open Architecture

React Open Architecture is a starter template for developing enterprise-level modern React applications. It is designed with a strong emphasis on clean architecture, functional types and paradigms, lack of side effects, and separation of concerns. This template provides a structured approach to building React applications, promoting maintainability, testability, and scalability.

## Key Features

- **Decoders:** An extra layer of safety used in conjunction with external APIs. It runs all JSON data through a set of decoders to ensure that incoming and outgoing data is compliant with the API schema.
- **Services:** The lowest possible layer that interacts with the outside world. Services in this architecture deal with and expose `TaskEither<T>`, which is functionally composable and acts as an equivalent of Promises.
- **Store:** This layer manages the application state and utilizes libraries like MobX or Signals. The store feeds data from services and encapsulates all error handling.
- **Component:** The topmost layer that connects to stores and exposes UI functionality to the user. Components in this architecture are organized in a structured manner for better separation of concerns.
- **Component Enhancers:** A collection of independent functions that act as component wrappers, adding extra functionality. These enhancers can be composed together to extend the capabilities of components.

## Benefits

- **Clean Architecture:** The template promotes clean and scalable code organization, making it easier to understand and maintain the application over time.
- **Functional Paradigms:** The use of functional types and paradigms ensures a more declarative and predictable coding style, reducing bugs and side effects.
- **Separation of Concerns:** By separating the application into distinct layers, it becomes easier to reason about each part and make changes without affecting the entire system.
- **Composability:** The ability to compose component enhancers allows for the flexible addition of functionality without modifying the core components.
- **Data Safety:** The inclusion of decoders provides an extra layer of safety when working with external APIs, ensuring that incoming and outgoing data adheres to the API schema.

## Getting Started

To use React Open Architecture, follow these steps:

1. Clone the repository: `git clone https://github.com/venil7/react-open-architecture.git`
2. Install the dependencies: `npm install` or `yarn install`
3. Start the development server: `npm start` or `yarn start`
4. Begin building your React application based on the provided architecture and folder structure.

## Folder Structure

The folder structure of React Open Architecture follows a logical separation of concerns:

```
├── src
│   ├── __tests__
│   ├── components
│   ├── components/enhance
│   ├── decoders
│   ├── services
│   └── store
└── ...
```

- `components`: Contains the top-level components that connect to stores and expose UI functionality to the user.
- `components/enhance`: Includes a set of independent functions that act as component wrappers, adding extra functionality.
- `services`: Houses the services responsible for interacting with external APIs or data sources, exposing `TaskEither<T>` to ensure composability.
- `store`: Manages the application state, integrates data from services, and encapsulates error handling.
- `decoders`: Provides an extra layer of safety when working with external APIs by running all JSON data through a set of decoders.

## Contributing

Contributions to React Open Architecture are welcome! If you have any ideas, bug fixes, or improvements, feel free to open an issue or submit a pull request.

Please ensure that your contributions align with the goals and principles of this project. Follow the existing code style and provide appropriate tests when introducing new features.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/). Feel free to use and modify it for your own purposes.

## Acknowledgements

React Open Architecture is the result of years of experience working in enterprise organizations. It has been successfully utilized in multiple projects, serving as a reliable and scalable foundation for modern React application development. The template incorporates industry best practices and lessons learned from real-world scenarios, making it a valuable resource for teams building enterprise-level applications. We would like to express our gratitude to the developers and organizations that have contributed to the continuous improvement of this architecture. Your feedback, suggestions, and contributions have played a vital role in shaping React Open Architecture into what it is today.