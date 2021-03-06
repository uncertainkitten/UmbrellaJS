This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Cassandra's ReactJS Templates (UmbrellaJS - because it keeps you DRY)

This repo is a group of unconnected components with a Create React App infrastructure wrapped around them so I can test and style them easily.

## Background

There are a lot of libraries out there to make forms easier or do basic things, but I prefer not introducing dependencies into my projects if I can help it.  So I'm going to just build a goto set of ReactJS component templates, give them pretty styles, and have them for future reference to make building
basic common attributes of single page apps much quicker.

## Current Templates
- ### Splash Page
   - Currently just a page with a cool gradient background and some basic information in a centered box.  That box may become the carousel component - which would reduce the splash page to literally just a cool gradient background and a container for stuff you want on the splash page

- ### Nav Bar
  - Takes in as props ("labels") containing an object with keys as labels and values as links
  - ```<NavBar labels={"Home": "/", "About": "/about", "Contact": "/contact"}>```

- ### Generic Form
   - Takes in as props ("fields") containing an object with a key of the label for the field, and an array of the input type and the value
   - Also takes in button - this determines the text on the submit button (This pattern can be extended with an array of buttons and a function to
   build the button elements)
   - ```<Form fields={"Username": ["text", "username"], "Password": ["password", "password"]}>```

- ### Dropdown Component
   - Takes in label and options as props - outputs a list as a dropdown that changes "Selected" in state - to access the "value", just pass up this.state.selected (May set this up so that this ends up the default behavior)

- ### Index (portrait or landscape)
  - Takes in as props ("items"), containing objects with keys as labels, and values as objects forming each index item.  Also uses id to uniquely
  identify each item
  - Takes in an orientation to determine the direction the information is listed
  - ```<Index items={"Alice": {"id": 1, "Attack": "5", "Defense": "5"}, "Bob": {"id": 2, "Attack: "1", "Defense": "1"}} orientation="index-portrait-container" />```

- ### Index Item (read only)
  - Created via the Index component, takes in "contents" as props from the Index items prop.  Contents have keys of the label for the line
  item, and values of the line item contents.
  - Takes in a label as props to label the individual item from Index
  -```<IndexItem key={id} contents={"id": 1, "Attack": "5", "Defense": "5"} label="Alice">```

- ### Progress Bar
  - Use this component with any component you would want to track progress with.  Pass down a percentage of the bar that should be filled - a function in
  the parent component that uses a slice of state to define this variable is a good pattern.



## Future Templates
- ### Checkbox Component
- ### Radio Button Component
- ### Button Component
- ### Hamburger Menu
- ### Carousel Component
- ### Clock
- ### Timer
- ### Clicker w/ Counter
- ### Upload Form
- ### Download Page
- ### Index Item (line item edit)

More to be determined

## Installation

Clone the repo, run ```npm install```, and ```npm start``` to see the templates on localhost.

## Usage
I dunno, if you really like my components and styles, please credit me?  Will put more specific details for each template as I make them

## License: GNU GPLv3

## Color scheme generated by coolors.co - https://coolors.co/0d0106-5c0029-bfb48f-f06543-605b56 (link with colors)




