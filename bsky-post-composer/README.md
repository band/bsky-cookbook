# Bluesky Post Composer

A demo React application for composing Bluesky posts with character counting and local storage persistence.

## Features

- Post composer with character limit enforcement (300 characters)
- Real-time character counter with visual feedback
- Local storage persistence for draft posts
- Demo UI controls (attachments, polls, visibility)
- Responsive design with Tailwind CSS
- Prevents posting when over character limit or empty

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/bsky-post-composer.git
cd bsky-post-composer
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technical Details

This project was built with:
- React + TypeScript
- Tailwind CSS for styling
- LocalStorage API for persistence

## Future Enhancements

This is currently a demo app and doesn't connect to the Bluesky API. Potential future enhancements include:
- Authentication with Bluesky
- Actually posting to Bluesky
- Support for rich text formatting
- Image upload functionality
- Improved poll creation interface

## License

This project is open source and available under the [MIT License](LICENSE).