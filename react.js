

// REACT

// react is an open souce JavaScript library for building user interfaces
// it is not a framework it is library
// responsible for building user interfaces

//React has a rich eco system and plays really well with other libraries and is more than capable of building enterprise scale web applications

// why react?
// One of the most popular IJI libraries and is well known in the job market
// React has a great community behind it
// React has a component based architecture
// React is declarative

//to install react in vs code -> in terminal -> npx create-react-app react-demo

// Components -> part of user interface
// e.g. -> a traditional website can be broken down into HEADER, SIDENAV, MAIN CONTENT, FOOTER.
// component can also be reusable, the same component used with different properties
// e.g. Greet() can be reused as many times as we want in App.js
// Root(App)component contains all four component

// Component Code
// component code is usually placed in javascript file
//e.g. -> AppComponent placed in App.js

// components types -> Function Components and Class Components

// Functional Components-> they are literally javascript function

//to create first function component -> create a folder named components under src -> create a file under components named as Greet.js
// in Greet.js -> create a fnc
// in App.js -> import Greet from './components/Greet' and include <Greet/> under <div>

//to launch host 3000 browser
// cd react-demo
// npm start

// arrow functions 
// Arrow functions are a concise way to write functions in JavaScript, introduced in ES6. They are often used in React for cleaner and more readable code, especially for component functions, callbacks, and event handlers.

//JSX- JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows you to write HTML-like code within your JavaScript, making it easier to create and visualize React components.
//It simplifies code by combining HTML and JavaScript logic in one file.

// HTML Inside JavaScript
// You can directly write HTML-like elements within JavaScript.

// JavaScript Expressions
// Use {} to include any valid JavaScript expressions like variables, functions, or calculations.

//ClassName Instead of Class
//In JSX, use className instead of class (since class is a reserved keyword in JavaScript).

//JSX is not natively understood by browsers. Tools like Babel convert JSX into regular JavaScript using React.createElement().
// JSX differences compare to regular HTML are
// class -> className
// for -> htmlFor
// camelCase property naming convention
// onclick -> onClick
// tabindex -> tablndex

// React Component returns JSX and JSX is simply a syntax extension of JavaScript

//PROPS(short for properties)
//practical react applications make use of props-> mechanism for passing data from a parent component to child component
// PROPS -> properties is the optional input that any component can accept, it allows the component content to be dynamic
// props are immutable
// to specify PROPS for the component we specify them as attributes
//e.g. -> in greet() just add attribute name and assign value 
//i,e -> <Greet name = "Ananya"/>
//send some information or property to the greet component(Greet.js)

//1. in greet.js file pass parameter as props in function
//2. use this parameter in the function body
// to display names that has passed to the component use props.name
// but this method does not give result as we expected
// coz props.name been treated as text
// we need to ask react to treat it as js expression
// so we add {} to props.name i,e { props.name }


// State
// since props are immutable - state is alternative to props

// Props VS State

// props - props get passed to the component
// function parameters
// immutable
// accessed using props parameter

// state - state is managed within the component
// Variables declared in the function body
// state can be changed(mutable)
// accesed using fnc provided by react -> useState Hook

//creating state
//1. import {useState} from 'react'
//2. invoke the function within component - useState()
//3. now this fnc return two const arrays -> const [message, setMessage]
//4. this syntax is called array destructuring
//5. const [message, setMessage] = message is a variable, setMessage is a fnc used to update message variable
//6. useState can also accept arguments




// HOOKS
// A Hook is a special function that lets you "hook into" React features
//useState
// useReducer
// useEffect
// useContext
// useRef
// useMemo
// useCaIIback
// useTransition
// useDeferredValue



// Event Handling in react (for user interaction)
// - MouseClicks
// - MouseOver
// - KeyPress
// - ChangeEvent etc

// react events are named using camel case rather than lower case
// in JSX we pass function as a event handler instead of string


// Parent and Child Component Communication
// strangely we still use props but this time we pass in reference to a function as props to the child component 


// Conditional Rendering->
// when building react application we may often need to hide some HTML elements based on a certain condition
// Conditional Rendering works in a same way conditions works in JavaScript


// Short Circuit Operator Approach
// it is specific case of ternary operator approach
// when we want to render something or nothing we make use of short circuit operators


// displaying a lists of items 
// e.g - a list of Names, a list of products, a list of courses etc
// so we need to repeat html for some item in the list
// and react uses JavaScript map() method to achieve that
// so to add map() since it is a javasript fnc we use {}
// array.map is syntax
// map() recieves function as a arguments


// Styling React Components
// 1. CSS stylesheets
// 2. inline styling
// 3. CSS Modules -> file name must be suffixed with .module.css
// 4. CSS in JS Libraries

// HTTP
//https://jsonplaceholder.typicode.com/ 




// Use Transition Hook -> concerned abt performance 
//{useTransition}




