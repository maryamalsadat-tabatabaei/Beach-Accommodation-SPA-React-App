
# Beach Accommodation SPA React App
Welcome to the Beach Accommodation SPA React App! This is a modern, responsive application built using React, styled-components, and Contentful. It allows users to browse and search for various beach accommodation options based on their preferences. The app also utilizes react-icons, react-router-dom for navigation, and React Context for managing the state of the application.<br>

<img src="https://github.com/maryamalsadat-tabatabaei/beach-accommodation/assets/87692864/e5dad281-3240-41e8-9e45-abbcdead4e69" alt="Beach Accommodation" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/beach-accommodation/assets/87692864/1f19cf59-1b14-44d5-ac45-10b4f6cf9b5d" alt="Beach Accommodation" width="30%" height="auto" >
<img src="https://github.com/maryamalsadat-tabatabaei/beach-accommodation/assets/87692864/cce07f5e-22af-4cc9-9406-e320857fb002" alt="Beach Accommodation" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/beach-accommodation/assets/87692864/b599bb49-c588-4832-b9db-24698c5e20e9" alt="Beach Accommodation" width="30%" height="auto">
<img src="https://github.com/maryamalsadat-tabatabaei/beach-accommodation/assets/87692864/a6b889e4-4378-45e3-afdd-115fdfa4d032" alt="Beach Accommodation" width="30%" height="auto">

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Features](#features)
- [Project Background](#project-background)

## Installation

1. Clone the repository: `git clone https://github.com/maryamalsadat-tabatabaei/beach-accommodation.git`
2. Navigate to the project directory: `cd beach-accommodation`
3. Install dependencies: `npm install`
4. Set up Contentful:
  - Create a free account on Contentful.
  - Create a new Contentful space.
  - Configure the environment variables for Contentful API access ( REACT_APP_API_SPACE and REACT_APP_ACCESS_TOKEN) by creating a .env file in the project root and setting the values.
5. Start the development server: npm start
6. Open your browser and visit http://localhost:3000 to see the app in action.


## Configuration

To configure the project, create .env file and add the following variables:

- REACT_APP_API_SPACE
- REACT_APP_ACCESS_TOKEN

OR to get data locally, comment line 36 in context.js file and uncomment the command line 37
`let rooms = this.formatData(items);`

## Features

- Featured Rooms: The app showcases a selection of featured rooms that are highlighted for their unique features or popularity.
- Search Rooms: Users can search for rooms based on various properties such as room type, number of guests, room price, availability of breakfast, allowance of pets, and room size.

**Key Technologies** 
<br>The Beach Accommodation SPA React App utilizes the following technologies:

- React: A JavaScript library for building user interfaces. It provides an efficient and flexible way to render components and manage the application state.
- styled-components: A CSS-in-JS library that allows you to write CSS styles directly in your JavaScript code. It provides a powerful way to style React components.
- Contentful: A content management platform that enables the app to store and retrieve data for the rooms, including descriptions, images, and additional information.
- react-icons: A library of customizable icons for React applications. It provides a wide range of icons to enhance the visual appeal and user experience.
- react-router-dom: A routing library for React applications. It enables navigation between different pages within the app, ensuring a smooth browsing experience.
- React Context: A feature of React that allows for state management across multiple components without the need for prop drilling. It simplifies the sharing and updating of data throughout the application.

**Room Categories**
<br>The Beach Accommodation SPA React App offers several room categories, each with its own unique features and amenities. Here's what you can expect from each category:

- Description: Provides an overview of the room, including its size, layout, and any special features.
- Gallery: Displays a collection of high-quality images showcasing the room's interior, amenities, and surroundings.
- Info: Presents detailed information about the room, including the number of guests it can accommodate, pricing details, and any included extras.
- Extras: Lists additional amenities or services available to guests, such as complimentary breakfast, access to a private beach, spa treatments, etc.

## Project Background

This project is based on the work of [John Smilga's](https://github.com/john-smilga) course, and I would like to acknowledge his contribution. I have made modifications to the original project and I built upon that foundation to extend the project's functionality and address specific requirements. However, the core concept and initial implementation were inspired by the course and the work of the original author.
