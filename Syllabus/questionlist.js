export function createQuestionList(questions) {
    const container = document.createElement("div");

    questions.forEach((question, index) => {
        const listContainer = document.createElement("div");
        listContainer.className = "row rounded fs-light p-1 py-2 fs-5 mb-3 shadow purple-blue-gradient";

        const questionElement = document.createElement("div");
        questionElement.className="col-1";
        questionElement.textContent = `Q${index + 1}`;
        listContainer.appendChild(questionElement);

        const paraElement = document.createElement("p");
        paraElement.className = "col-11";
        paraElement.textContent = question;
        listContainer.appendChild(paraElement);
        console.log(question);
        container.appendChild(listContainer);
    });
    return container;    
}
