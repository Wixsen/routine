import {createModuleSection} from '../moduleUtil.js'
import {createNavPath } from "../../navPath.js";
import {artOfLearningPath} from "../coursePath.js"


// path directory
const pathElement = document.querySelector("#navPath");
const pathCreatedElement =  createNavPath("../../index.html", artOfLearningPath);
pathElement.appendChild(pathCreatedElement);

const bcaSem3Course = [
  {
    title: "Understanding Learning",
    moduleList: [
      "Meaning, Nature and Definition of Learning",
      "Characteristics of Learning",
      "Types - Visual, Auditory, Reading/Writing, Kinesthetic Learning",
      "Other learning styles (Concept Learning, Problem-solving Learning, Serial Learning, Paired-associate Learning)",
      "Learning and Maturation",
    ],
  },
  {
    title: "Theories of Learning",
    moduleList: [
      "Behaviorist Theories of Learning – Classical Conditioning Theory",
      "Social Learning Theories – Bandura’s Social Learning Theory",
      "Factors affecting Learning – Internal and External Factors",
      "Role of Motivation in facilitating learning",
      "Intrinsic and Extrinsic Motivation",
    ],
  },
  {
    title: "Incorporating Learning",
    moduleList: [
      "Steps for Effective Learning",
      "- Creating Learning Environment",
      "   1. Organizing Study Space",
      "   2. Developing Study Routine",
      "   3. Minimizing Distractions",
      "- Identifying Learning Styles",
      "- Adopting Effective Study Techniques",
      "   1. Taking Notes",
      "   2. Active Reading Strategies",
      "   3. Utilizing Visual Aids",
      "   4. Memory Techniques and Mnemonics",
      "- Time Management",
      "   1. Prioritizing Learning",
      "   2. Moving from Simple to Complex Learning",
      "   3. Avoiding Procrastination",
      "- Cultivating Growth Mindset",
      "   1. Learning from Trial and Error",
      "   2. Embracing Challenges",
      "   3. Overcoming Barriers",
      "- Collaborative Learning Strategies",
      "   1. Participation in class and group discussion",
      "   2. Peer Engagement",
      "- Use of Technology for Learning Enhancement",
      "  Maintaining a Healthy Life Style",
      "   1. Adequate Sleep",
      "   2. Exercise",
      "   3. Stress Management",
    ],
  },
];



const moduleSection = document.querySelector("#moduleSection");
createModuleSection(moduleSection, "ARTOFLEARNING", bcaSem3Course);