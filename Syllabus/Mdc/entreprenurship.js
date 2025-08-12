import {createModuleSection} from '../moduleUtil.js'
import {createNavPath } from "../../navPath.js";
import {artOfLearningPath} from "../coursePath.js"


// path directory
const pathElement = document.querySelector("#navPath");
const pathCreatedElement =  createNavPath("../../index.html", artOfLearningPath);
pathElement.appendChild(pathCreatedElement);

const bcaSem3Course = [
  {
    title: "BUSINESS ENTREPRISES",
    moduleList: [
      "Meaning, Forms of Business Organisation: Sole Proprietorship, Hindu Undivided Family (HUF), Partnership firm, Joint Stock Company, Cooperative Society; Limited Liability Partnership – Meaning, Features, Advantages and Disadvantages.",
      "Private and Public Company – Meaning, Features, Merits and Demerits.",
    ],
  },
  {
    title: "FOUNDATION OF INDIAN BUSINESS",
    moduleList: [
      "Manufacturing and service sector: Small and medium enterprises and their contribution in Indian economy; Government policy towards SME sector.",
      "Liberalization, Privatization and Globalization.",
      "Technological innovations and skill development.",
      "‘Make in India’ Movement.",
      "Social responsibility and ethics.",
      "Emerging opportunities in business.",
      "Franchising, Outsourcing, and E-commerce.",
    ],
  },
  {
    title: "NATURE OF MANAGEMENT",
    moduleList: [
      "Definition, Importance, Goals of Management.",
      "Levels of Management.",
      "Management Skills and roles.",
      "Management Vs Administration.",
      "Management – a Science or an Art.",
      "Management as a Profession.",
    ],
  },
  {
    title: "DEVELOPMENT OF MANAGEMENT THOUGHT",
    moduleList: [
      "Historical Background of management.",
      "Scientific Management.",
      "Administrative Management.",
      "Human Relations Approaches – Mayo, Hawthorne.",
      "System Approach.",
      "Contingency Approach – Lawerence & Lorsch.",
      "McKinsey 7S Framework.",
      "Management by Objectives.",
    ],
  },
  {
    title: "FUNCTIONS OF MANAGEMENT",
    moduleList: [
      "Planning: Definition and Nature, Importance, Limitations, Essential Elements of Effective Planning, Steps in planning.",
      "Organizing: Concept and Process of Organizing, Formal and informal Organization.",
      "Different types of authority (line, staff and functional).",
      "Different forms of departamentation.",
      "Staffing: Concept and Staffing process.",
      "Directing: Meaning and Characteristics, Importance, Objectives.",
      "Controlling: Concept, Types of control (Feed forward, Concurrent and Feedback), Process of Controlling.",
    ],
  },
];


const moduleSection = document.querySelector("#moduleSection");
createModuleSection(moduleSection, "ARTOFLEARNING", bcaSem3Course);