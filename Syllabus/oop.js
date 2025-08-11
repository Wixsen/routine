import {createModuleSection} from './moduleUtil.js'
import {oopPath} from "./coursePath.js"
import { createNavPath } from "./../navPath.js";



const bcaSem3Course = [
  {
    title: "Introduction",
    moduleList: [
      "Java's History",
      "Importance of Java for the Internet",
      "Java's Magic - Bytecode",
      "Features of Java",
      "Virtual Machine Concept",
      "Objects",
      "Java Operators",
      "Expressions,",
      "Statements and Arrays",
    ],
  },
  {
    title: "Classes and Object",
    moduleList: [
      "Classes and Objects-Class Fundamentals",
      "Creating objects",
      "Assigning object reference variables",
      "Introducing Methods",
      "Static methods",
      "Constructors and types of constructor",
      "Overloading constructors",
      "Using this Keyword",
      "Using object Parameters",
      "Argument passing",
      "Returning objects",
      "Method overloading",
      "Overloading Method",
    ],
  },
  {
    title: "Inheritance",
    moduleList: [
      "Overriding Abstract Classes",
      "Polymorphism",
      "Multilevel inheritance",
      "Method Overriding",
      "Package",
      "CLASS PATH",
      "Package naming",
      "Accessibility of Packages",
      "Using package member",
    ],
  },
  {
    title: "Abstract Class and Interface",
    moduleList: [
      "Interfaces-Implementing Interfaces",
      "Interface and Abstract Classes",
      "Exceptions Handling, Exception",
      "Handling of Exception",
      "Using try-catch",
      "Catching multiple exceptions",
      "Using finally clause",
      "Types of Exceptions",
      "Throwing Exception",
    ],
  },
  {
    title: "Multithreading and Applet",
    moduleList: [
      "Multithreading Programming:",
      "The Java Thread Model",
      "Understanding Threads",
      "Creating Threads",
      "Create Multiple Threads",
      "Thread Priorities",
      "Applet Basics",
      "Applet Architecture",
      "Applet Life Cycle",
      "Simple Applet Display Methods",
      "The HTML APPLET Tag Passing Parameters to Applets",
    ],
  },
  // },
  // {
  //   title: "Primitive Data Type And variables",
  //   moduleList: ["Java Operators", "Expressions,", "Statements and Arrays"],
  // },
];

// path directory
const pathElement = document.querySelector("#navPath");
const pathCreatedElement =  createNavPath("../index.html", oopPath);
pathElement.appendChild(pathCreatedElement);


const moduleSection = document.querySelector("#moduleSection");

createModuleSection(moduleSection, "OOP", bcaSem3Course);