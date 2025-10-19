# Calculator React

A simple, functional calculator built with React and Vite. This project demonstrates basic React concepts including state management, event handling, and component composition. The calculator supports basic arithmetic operations and uses the mathjs library for safe mathematical evaluations.

## Features

- **Basic Arithmetic Operations**: Supports addition (+), subtraction (-), multiplication (*), and division (/)
- **Decimal Point Support**: Allows decimal numbers for precise calculations
- **Clear Functionality**: 'C' button to reset the calculator
- **Error Handling**: Displays "Error" for invalid mathematical expressions
- **Real-time Display**: Shows the current expression being built
- **Safe Calculations**: Uses mathjs library to prevent unsafe evaluations
- **Responsive Design**: Clean, modern UI that works on different screen sizes
- **Keyboard-friendly**: Built with React hooks for efficient state management

## Technologies Used

- **React 19**: Latest version of React with modern hooks and features
- **Vite**: Fast build tool and development server
- **mathjs**: Powerful mathematics library for safe expression evaluation
- **ESLint**: Code linting and formatting
- **CSS3**: Modern styling with grid layout and responsive design

## Live Demo

Check out the live demo: [https://iam269.github.io/calculator_react/](https://iam269.github.io/calculator_react/)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iam269/calculator_react.git
   cd calculator_react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
calculator_react/
├── public/
│   └── vite.svg          # Vite logo
├── src/
│   ├── App.jsx           # Main app component that renders the calculator
│   ├── App.css           # Styles for the calculator UI
│   ├── main.jsx          # Application entry point
│   ├── assets/
│   │   └── react.svg     # React logo
│   └── components/
│       └── Calculator.jsx # Calculator component with logic and state
├── components/           # Additional components directory
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md             # Project documentation
```

## How It Works

The calculator uses React's `useState` hook to manage two pieces of state:
- `display`: What the user sees on the screen
- `expression`: The mathematical expression being built

When a button is clicked:
- Numbers and operators are appended to the expression
- The '=' button evaluates the expression using mathjs
- The 'C' button resets both states
- Invalid expressions show "Error"

The UI is styled with CSS Grid for a responsive button layout.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
