import {createModuleSection} from '../moduleUtil.js'
import { createNavPath } from "../../navPath.js";
import {osPath} from "../coursePath.js"
import { osCourseData } from "./coursesData.js";


// path directory
const pathElement = document.querySelector("#navPath");
const pathCreatedElement =  createNavPath("../../index.html", osPath);
pathElement.appendChild(pathCreatedElement);

const moduleSection = document.querySelector("#moduleSection");
createModuleSection(moduleSection, "OS", osCourseData);