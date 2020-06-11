rpg-cards
=========

RPG spell/item/monster card generator

preview
=======
Click [here](https://crobi.github.io/rpg-cards/generator/generate.html) for a live preview of the original generator.

status of the project
=====================

I won't have time to work on this project in the forseeable future.
PR's are still welcome, so feel free to implement new awesome features!

FAQ
=====================

- What browsers are supported?
  - A modern browser (Chrome, Firefox, Edge, Safari). The generator has some issues on IE.
- Cards are generated without icons and background colors, what's wrong?
  - Enable printing backround images in your browser print dialog
- I can't find an icon that I've seen on [game-icons.net](http://game-icons.net), where is it?
  - See the section "updating icons" below.
- The layout of the cards is broken (e.g., cards are placed outside the page), what's wrong?
  - Check your page size, card size, and cards/page settings. If you ask the generator to place 4x4 poker-sized cards on a A4 paper, they won't fit and they will overflow the page.

updating icons
==============

This project includes a copy of icons from the [game-icons](http://game-icons.net) project,
which regularly publishes new icons.
To download these new icons:

- Install Imagemagick
- Run the following commands from the root of the project:
  - `npm install`
  - `node ./resources/tools/update-icons.js`
  
Install and configure Angular on Windows 10 PC
=========  
1. Configure Node & Angular on Windows (host OS)
	1. Install latest version of  Node.js (included npm) from: https://nodejs.org/en/
	2. Install the Angular Command Line interface & update NPM
		a. Open CMD as Admin
		b. Update npm to the latest version: npm install -g npm
		c. Install Angular CLI: npm install -g @angular/cli
	3. Create a folder to hold your angular apps: 
		a. Navigate to your local repository folder
		b. Create App folder
2. Create a New Angular App
	1. OpenVS Code
		a. Navigate to your local repository folder
		b. Open a terminal: Ctrl+Shift+`
		c. Create new angular app: ng new my-app
	2. To develop the app
		a. Open VS Code
			i. Open Settings: ctrl+, 
			ii. Ensure Commonly Used Setting is set to Auto Save with a reasonable delay
		b. Open a terminal: Ctrl+Shift+`
			i. Navigate to the my-apps folder: cd angular/my-app
			ii. Enter: npm start
		c. Once compile is complete
Open Chrome and navigate to: http://localhost:4200


license
=======

This generator is provided under the terms of the MIT License

Icons are made by various artists, available at [http://game-icons.net](http://game-icons.net).
They are provided under the terms of the Creative Commons 3.0 BY license.
