const course = {
  name: "BCA 3rd Sem",
  coreSubjects: [
    {
      name: "Operating System",
      svg: "assets/subject-logo/os-windows-logo.svg",
      link: "",
    },
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
  optionalSubjects: [
    {
      name: "MDC",
      svg: "assets/subject-logo/os-windows-logo.svg",
      link: "",
    },
    {
      name: "AEC",
      svg: "assets/subject-logo/os-windows-logo.svg",
      link: "",
    },
    {
      name: "SEC",
      svg: "assets/subject-logo/os-windows-logo.svg",
      link: "",
    },
  ],
};

const coreSubjectContainerElement = document.querySelector("#coreSubjectContainer");
const labSubjectContainerElement = document.querySelector("#labSubjectContainer");
const optionalSubjectContainerElement = document.querySelector("#optionalSubjectContainer");


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
        ${displayName} <span class="badge bg-secondary text">New</span>
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



const optionalSubjects = course.optionalSubjects;
createSujectDropDown(
  optionalSubjectContainerElement,
  "optionalSubjects",
  "Optional Subject",
  optionalSubjects
);
