import {createModuleSection} from '../moduleUtil.js'
import {oopPath} from "../coursePath.js"
import { createNavPath } from "../../navPath.js";
import { oopCourseData } from "./coursesData.js";

// path directory
const pathElement = document.querySelector("#navPath");
const pathCreatedElement =  createNavPath("../../index.html", oopPath);
pathElement.appendChild(pathCreatedElement);


const moduleSection = document.querySelector("#moduleSection");

createModuleSection(moduleSection, "OOP", oopCourseData);