import { createNavPath } from "./navPath.js";

const navdata = [
  {
    name: "BCA-III",
    path: "#",
    isActive: true,
  },
];

const course = {
  name: "BCA 3rd Sem",
  coreSubjects: [
    {
      name: "Operating System",
      svg: "assets/subject-logo/os-windows-logo.svg",
      link: "Syllabus/Core/os.html",
    },
    {
      name: "DBMS",
      svg: "assets/subject-logo/database.svg",
      link: "Syllabus/Core/dbms.html",
    },
    {
      name: "OOP",
      svg: "assets/subject-logo/java.svg",
      link: "Syllabus/Core/oop.html",
    },
  ],
  labSubjects: [
    {
      name: "DBMS",
      svg: "assets/subject-logo/database.svg",
      link: "",
    },
    {
      name: "OOP",
      svg: "assets/subject-logo/java.svg",
      link: "",
    },
  ],
  mdcSubjects: [
    {
      name: "MATLAB",
      svg: "assets/subject-logo/matlab.svg",
      link: "#",
    },
    {
      name: "Entrepreneurship Developement",
      svg: "assets/subject-logo/Entrepreneurship.jpg",
      link: "Syllabus/Mdc/entreprenurship.html",
    },
  ],
  aecSubjects: [
    {
      name: "Art of learning",
      svg: "assets/subject-logo/artsofLearning.webp",
      link: "Syllabus/Aec/artOfLearning.html",
    },
  ],
  secSubjects: [
    {
      name: "Japanese",
      svg: "assets/subject-logo/fuji-japan-japanese-svgrepo-com.svg",
      link: "#",
    },
    {
      name: "Russian",
      svg: "assets/subject-logo/russian.svg",
      link: "#",
    },
    {
      name: "French",
      svg: "assets/subject-logo/france.svg",
      link: "#",
    },
    {
      name: "Mobile photography",
      svg: "assets/subject-logo/camera.svg",
      link: "#",
    },
  ],
};

const coreSubjectContainerElement = document.querySelector(
  "#coreSubjectContainer"
);
const labSubjectContainerElement = document.querySelector(
  "#labSubjectContainer"
);
const mdcSubjectContainerElement = document.querySelector(
  "#mdcSubjectContainer"
);
const aecSubjectContainerElement = document.querySelector(
  "#aecSubjectContainer"
);
const secSubjectContainerElement = document.querySelector(
  "#secSubjectContainer"
);

// path directory
const pathElement = document.querySelector("#navPath");
const pathCreatedElement =  createNavPath("index.html", navdata);
pathElement.appendChild(pathCreatedElement);

const createSujectDropDown = (container, name, displayName, courseSubjects) => {
  const id = `${name}-collapse`;

  const rootElement = document.createElement("div");
  rootElement.className = "card rounded border";

  const collapseButton = document.createElement("a");
  collapseButton.className =
    "btn w-100 text-start card-header fs-5 d-flex justify-content-between align-items";
  collapseButton.setAttribute("data-bs-toggle", "collapse");
  collapseButton.setAttribute("href", `#${id}`);
  collapseButton.setAttribute("role", "button");
  collapseButton.setAttribute("aria-expanded", "false");
  collapseButton.setAttribute("aria-controls", id);

  collapseButton.innerHTML = `
    <span>
        ${displayName} 
    </span>
    <i class="bi bi-chevron-down transition"></i>`;
  rootElement.appendChild(collapseButton);

  const collapseContentElement = document.createElement("div");
  collapseContentElement.className = "collapse";
  collapseContentElement.setAttribute("id", id);
  rootElement.appendChild(collapseContentElement);

  const cardBodyElement = document.createElement("div");
  cardBodyElement.className = "card-body";
  collapseContentElement.appendChild(cardBodyElement);

  const cardRowElement = document.createElement("div");
  cardRowElement.className = "row g-2 g-md-3 text-center";
  cardBodyElement.appendChild(cardRowElement);

  // main card items
  courseSubjects.forEach((detail) => {
    const cardColConfigElement = document.createElement("div");
    cardColConfigElement.className = "col-4 col-md-3 col-lg-2";
    // TODO: Link
    const cardElement = document.createElement("a");
    cardElement.className = "btn card border subject-button";
    if (detail.link) {
      cardElement.setAttribute("href", detail.link);
    } else {
      cardElement.classList.add("disabled");
      cardElement.style.pointerEvents = "none";
    }
    const img = document.createElement("img");
    img.setAttribute("src", detail.svg);
    img.className = "p-4 pb-1 img-fuild";
    cardElement.appendChild(img);
    // img.setAttribute("alt",);

    const text = document.createElement("p");
    text.textContent = detail.name;
    text.className = "card-body p-0";
    cardElement.appendChild(text);

    cardColConfigElement.appendChild(cardElement);
    cardRowElement.appendChild(cardColConfigElement);
  });
  cardBodyElement.appendChild(cardRowElement);
  container.appendChild(rootElement);
};

const coreSubjects = course.coreSubjects;
createSujectDropDown(
  coreSubjectContainerElement,
  "coreSubjects",
  "Core Subject",
  coreSubjects
);

const labSubjects = course.labSubjects;
createSujectDropDown(
  labSubjectContainerElement,
  "labSubjects",
  "Lab Subject",
  labSubjects
);

const mdcSubjects = course.mdcSubjects;
createSujectDropDown(
  mdcSubjectContainerElement,
  "mdcSubjects",
  "MDC Subject",
  mdcSubjects
);
const aecSubjects = course.aecSubjects;
createSujectDropDown(
  aecSubjectContainerElement,
  "aecSubjects",
  "AEC Subject",
  aecSubjects
);
const secSubjects = course.secSubjects;
createSujectDropDown(
  secSubjectContainerElement,
  "secSubjects",
  "SEC Subject",
  secSubjects
);
