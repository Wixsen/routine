import { createModuleSection } from "../moduleUtil.js";
import { createNavPath } from "../../navPath.js";
import { dbmsPath } from "../coursePath.js";
import { dbmsCourseData } from "./coursesData.js";

// path directory
const pathElement = document.querySelector("#navPath");
const pathCreatedElement = createNavPath("../../index.html", dbmsPath);
pathElement.appendChild(pathCreatedElement);


const moduleSection = document.querySelector("#moduleSection");
createModuleSection(moduleSection, "DBMS", dbmsCourseData);
