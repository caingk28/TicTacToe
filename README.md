# Tic Tac Toe Game

A modern, responsive Tic Tac Toe game implemented with HTML, CSS, and JavaScript. This game features both single-player (vs computer) and two-player modes, along with a sleek design and additional features like dark/light mode and win animations.

## Features

- **Game Modes**: 
  - Play against the computer
  - Play against another player
- **Responsive Design**: Adapts to different screen sizes, including mobile devices
- **Dark/Light Mode**: Toggle between dark and light color schemes
- **Win Animation**: Highlights the winning line when a player wins
- **Score Tracking**: 
  - Keeps track of player and computer scores
  - Stores and displays high score using local storage
- **Sound Effects**: Plays sounds for moves and wins
- **Reset Functionality**: Allows players to reset the game at any time

## How to Play

1. Choose a game mode: "Play vs Computer" or "Play vs Player"
2. The game board will appear, and Player X starts first
3. Click on an empty cell to make a move
4. In computer mode, the AI will automatically make its move after the player
5. The game ends when a player wins or it's a draw
6. Use the "Reset Game" button to start a new game

## Technical Details

### HTML Structure

- The game board is dynamically created using JavaScript
- Utilizes semantic HTML5 elements for better structure and accessibility

### CSS Styling

- Uses CSS Grid for the game board layout
- Implements CSS variables for easy theme switching
- Includes animations for cell population and win highlighting
- Responsive design with media queries for different screen sizes

### JavaScript Functionality

- Implements game logic including win checking and draw conditions
- Features a simple AI for the computer player
- Manages game state and player turns
- Handles user interactions and updates the UI accordingly
- Implements local storage for high score persistence

## Browser Compatibility

This game is compatible with modern web browsers including:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Safari (latest version)
- Microsoft Edge (latest version)

## Installation and Running

1. Clone this repository or download the ZIP file
2. Extract the files if downloaded as ZIP
3. Open the `index.html` file in a web browser

No additional installation or setup is required as this is a client-side application.

## Customization

- To modify colors, edit the CSS variables in the `:root` selector in `style.css`
- To change game sounds, replace the audio file URLs in the HTML file
- To adjust the computer AI difficulty, modify the `findBestMove` function in `script.js`

## Future Improvements

- Implement difficulty levels for the computer player
- Add online multiplayer functionality
- Create a leaderboard for high scores
- Implement additional themes or custom theme creation

## Contributing

Contributions to improve the game are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Sounds from [Mixkit](https://mixkit.co/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Created by [Your Name] - feel free to contact me for any questions or feedback!