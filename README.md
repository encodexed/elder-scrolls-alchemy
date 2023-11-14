# Elder Scrolls Online Alchemy Assistant

**Please Note: This project is slated for a rewrite with more professional design patterns, styling, coding practices and use of technology like TypeScript and React's useContext hook**

## Demo & Snippets

![ESOAv1](https://github.com/encodexed/elder-scrolls-alchemy/assets/107448691/5bfa2c40-0aaa-49b9-bfd7-ea2df9967a47)

Full size images:

- [Ingredients Page](https://res.cloudinary.com/dihtw7wct/image/upload/v1699920664/Screenshot_2023-11-14_at_11.04.10_am_rpy9yr.png)
- [Effects Page](https://res.cloudinary.com/dihtw7wct/image/upload/v1699920711/Screenshot_2023-11-14_at_11.04.28_am_qpkeo1.png)

---

## Requirements / Purpose

The Elder Scrolls Online (ESO) Alchemy Assistant app is a tool for people who play ESO. It aims to emulate the alchemy crafting system present in the game but as a calculator to help players craft potions. In the game, the mechanics and the UI can often be confusing, and depending on the player's progress in the game, ingredients may not display their full range of effects and capabilities. This app then demystifies the process and helps players explore and experiment with different combinations of ingredients and effects.

Players who play ESO on PC will have access to mods that modify the game to help them achieve the same help in game, but players trying to keep their game "vanilla" or players on consoles like Xbox and Playstation will not have access to such help. This tool is therefore targetted at those players.

**Tech Stack:** HTML, TailwindCSS, JavaScript, React

---

## Build Steps

To run this project in your local repository, paste the following code in your terminal:

```bash
git clone git@github.com:encodexed/elder-scrolls-alchemy.git
cd elder-scrolls-alchemy
npm install
npm start
```

---

## Design Goals / Approach

- As my primary audience was console players, this app was designed with mobile in mind. I tried to write it in a certain way that no scrolling on the body was necessary, but on some screen sizes there is a little bit.
- This was my first ever React project and it has been written in a bit of a messy way, but it was a labour of love for me as I was learning to code. The project will be rewritten with better and cleaner practices and that will likely come to fruition before the end of November, 2023.
- I chose to write this project with TailwindCSS as a learning process as well as a learning process for React.

---

## Features

The project's key features include:

- Components that map out data about Ingredients and Effects into a selectable list
- Live visual feedback in the form of text highlighting to help players craft potions efficiently
- Behind-the-scenes calculations that power the calculator to show players combinations and results

---

## Known issues

- This repository is not necessarily up to date with the version on the [hosted site](https://alakaslam.io/alchemy_assistant).
- `useContext` or similar state management tools are not utilised and there is a lot of prop drilling/state lifting that clutter the code

---

## Future Goals

- This project will be rewritten with better practices and technology

---

## Licensing Details

Copyright 2023 Robert Gollan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without limitation in the rights to use, copy, modify, merge, publish, and/ or distribute copies of the Software in an educational or personal context, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
Permission is granted to sell and/ or distribute copies of the Software in a commercial context, subject to the following conditions:

Substantial changes: adding, removing, or modifying large parts, shall be developed in the Software. Reorganizing logic in the software does not warrant a substantial change.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Further details, related projects, reimplementations

- Watch this space.
