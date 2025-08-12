import { createNavPath } from "../../navPath.js";
import { artOfLearningPath } from "../coursePath.js";

const createModuleList = (courseList) => {
  const div = document.createElement("div");
  div.className = "accordion-body";

  const ul = document.createElement("ul");
  ul.className = "list-group list-group-flush";

  courseList.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    const topic = document.createElement("span");
    topic.textContent = item.topic;
    topic.className = "fw-semibold"
    li.appendChild(topic);

    if (item.nestList != null) {
      const nestedList = document.createElement("ul");
      nestedList.className = "list-group my-3 list-group-horizontal fw-light";

      item.nestList.forEach((nestedText) => {
        const nestedLi = document.createElement("li");
        nestedLi.className = "list-group-item p-2 text-center ";
        nestedLi.textContent = nestedText;
        nestedList.appendChild(nestedLi);
      });
      li.appendChild(nestedList);
    }

    ul.appendChild(li);
  });
  div.appendChild(ul);

  return div;
};

export const createModuleSection = (containerNode, name, courseList) => {
  const titleElement = document.createElement("h2");
  titleElement.className = "f-3 lead pb-2";
  titleElement.textContent = "Course Module";
  containerNode.appendChild(titleElement);

  const accordionId = "accordionExample";
  const accordionContainer = document.createElement("div");
  accordionContainer.className = "accordion accordion-flush bg-secondary mb-2 ";
  accordionContainer.id = accordionId;
  containerNode.appendChild(accordionContainer);

  // Create items
  courseList.forEach(({ title, moduleList }, index) => {
    const postId = title.replace(/\s+/g, "");

    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";

    const accordionHeaderId = `heading${postId}`;
    const accordionHeader = document.createElement("h3");
    accordionHeader.className = "accordion-header";
    accordionHeader.id = accordionHeaderId;

    const dataBsId = `collapse${postId}`;
    const accordionHeaderBtn = document.createElement("button");
    accordionHeaderBtn.className =
      "accordion-button collapsed bg-body rounded shadow";
    accordionHeaderBtn.type = "button";
    accordionHeaderBtn.setAttribute("data-bs-toggle", "collapse");
    accordionHeaderBtn.setAttribute("data-bs-target", `#${dataBsId}`);
    accordionHeaderBtn.setAttribute("aria-expanded", "false");
    accordionHeaderBtn.setAttribute("aria-controls", dataBsId);
    accordionHeaderBtn.textContent = `${index + 1}. ${title}`;

    accordionHeader.appendChild(accordionHeaderBtn);

    const articleModuleElement = document.createElement("div");
    articleModuleElement.id = dataBsId;
    articleModuleElement.className =
      "accordion-collapse collapse rounded shadow-lg";
    articleModuleElement.setAttribute("aria-labelledby", accordionHeaderId);

    articleModuleElement.setAttribute("data-bs-parent", `#${accordionId}`);

    const moduleCourseListElement = createModuleList(moduleList);
    articleModuleElement.appendChild(moduleCourseListElement);

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(articleModuleElement);

    accordionContainer.appendChild(accordionItem);
  });
};

// path directory
const pathElement = document.querySelector("#navPath");
const pathCreatedElement = createNavPath("../../index.html", artOfLearningPath);
pathElement.appendChild(pathCreatedElement);

const bcaSem3Course = [
  {
    title: "Understanding Learning",
    moduleList: [
      {
        topic: "Meaning, Nature and Definition of Learning",
      },
      {
        topic: "Characteristics of Learning",
      },
      {
        topic: "Types - Visual, Auditory, Reading/Writing, Kinesthetic Learning",
      },
      {
        topic: "Other learning styles (Concept Learning, Problem-solving Learning, Serial Learning, Paired-associate Learning)",
      },
      {
        topic: "Learning and Maturation",
      },
    ],
  },
  {
    title: "Theories of Learning",
    moduleList: [
      {
        topic: "Behaviorist Theories of Learning – Classical Conditioning Theory",
      },
      {
        topic: "Social Learning Theories – Bandura’s Social Learning Theory",
      },
      {
        topic: "Factors affecting Learning – Internal and External Factors",
      },
      {
        topic: "Role of Motivation in facilitating learning",
      },
      {
        topic: "Intrinsic and Extrinsic Motivation",
      },
    ],
  },
  {
    title: "Incorporating Learning",
    moduleList: [
      {
        topic: "Steps for Effective Learning",
      },
      {
        topic: "Creating Learning Environment",
        nestList: [
          "Organizing Study Space",
          "Developing Study Routine",
          "Minimizing Distractions",
        ],
      },
      {
        topic: "Identifying Learning Styles",
      },
      {
        topic: "Adopting Effective Study Techniques",
        nestList: [
          "Taking Notes",
          "Active Reading Strategies",
          "Utilizing Visual Aids",
          "Memory Techniques and Mnemonics",
        ],
      },
      {
        topic: "Time Management",
        nestList: [
          "Prioritizing Learning",
          "Moving from Simple to Complex Learning",
          "Avoiding Procrastination",
        ],
      },
      {
        topic: "Cultivating Growth Mindset",
        nestList: [
          "Learning from Trial and Error",
          "Embracing Challenges",
          "Overcoming Barriers",
        ],
      },
      {
        topic: "Collaborative Learning Strategies",
        nestList: [
          "Participation in class and group discussion",
          "Peer Engagement",
        ],
      },
      {
        topic: "Use of Technology for Learning Enhancement",
      },
      {
        topic: "Maintaining a Healthy Life Style",
        nestList: ["Adequate Sleep", "Exercise", "Stress Management"],
      },
    ],
  },
];

// const bcaSem3Course = {
//   title: "Incorporating Learning",
//   moduleList: [
//     {
//       topic: "Steps for Effective Learning",
//     },
//     {
//       topic: "Creating Learning Environment",
//       nestList: [
//         "Organizing Study Space",
//         "Developing Study Routine",
//         "Minimizing Distractions",
//       ],
//     },
//     {
//       topic: "Identifying Learning Styles",
//     },
//     {
//       topic: "Adopting Effective Study Techniques",
//       nestList: [
//         "Taking Notes",
//         "Active Reading Strategies",
//         "Utilizing Visual Aids",
//         "Memory Techniques and Mnemonics",
//       ],
//     },
//     {
//       topic: "Time Management",
//       nestList: [
//         "Prioritizing Learning",
//         "Moving from Simple to Complex Learning",
//         "Avoiding Procrastination",
//       ],
//     },
//     {
//       topic: "Cultivating Growth Mindset",
//       nestList: [
//         "Learning from Trial and Error",
//         "Embracing Challenges",
//         "Overcoming Barriers",
//       ],
//     },
//     {
//       topic: "Collaborative Learning Strategies",
//       nestList: [
//         "Participation in class and group discussion",
//         "Peer Engagement",
//       ],
//     },
//     {
//       topic: "Use of Technology for Learning Enhancement",
//     },
//     {
//       topic: "Maintaining a Healthy Life Style",
//       nestList: [
//         "Adequate Sleep",
//         "Exercise",
//         "Stress Management",
//       ],
//     },
//   ],
// };

const moduleSection = document.querySelector("#moduleSection");
createModuleSection(moduleSection, "ARTOFLEARNING", bcaSem3Course);
