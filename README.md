# Points Counter

A simple points counter application built with JavaScript, demonstrating object-oriented programming principles. Users can add and remove points, and display the total points.

## Features

- Add points to the total.
- Remove points from the total.
- Display the current total points.

## Getting Started

1. Clone the repository or download the source code.
2. Open the HTML file in a web browser to run the application.

## Usage

To use the application, create an instance of the Points class and call its methods to manage points.

```javascript
let teamPoints = new Points(10);
console.log(teamPoints.displayPoints()); // Displays the total points
teamPoints.addPoints(5); // Adds 5 points
teamPoints.removePoints(3); // Removes 3 points
console.log(teamPoints.displayPoints()); // Displays the updated total points
```

## Contributing

If you would like to contribute to this project, please create a new branch and submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
