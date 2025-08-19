const routine = {
  bca_sem1: {
    Head: [
      "08:45-09:45",
      "09:45-10:45",
      "10:45-11:45",
      "11:45-12:45",
      "12:45-01:45",
      "01:45-02:45",
      "02:45-03:45",
    ],
    Days: {
      Monday: [
        "MDC-I(IKS)",
        "SEC-I(JPNL)",
        "BCA25102T PST (PD)",
        "BCA25102P PST (PD/ND)",
        "Break",
        "BCA25103P CA (ETC)",
        "BCA25103P CA (ETC)",
      ],
      Tuesday: [
        "VAC-I(ESS)",
        "AEC-I (GE-MD)",
        "BCA25101T MFCS-1(RP)",
        "BCA25103T CA (AA)",
        "Break",
        "BCA25102T PST (PD)",
        "BCA25102P PST (PD)",
      ],
      Wednesday: [
        "BCA25103T CA (AA)",
        "SEC-I(JPNL)",
        "BCA25102T PST (PD)",
        "BCA25102P PST (PD/ND)",
        "Break",
        "BCA25101T MFCS-1(RP)",
        "LIBRARY",
      ],
      Thursday: [
        "VAC-I(ESS)",
        "AEC-I(GE-MD)",
        "BCA25101T MFCS-1(RP)",
        "BCA25101T MFCS-1(RP)",
        "Break",
        "BCA25103T CA (AA)",
        "BCA25103T CA (AA)",
      ],
      Friday: [
        "MDC-I(IKS)",
        "AEC-I (GE-MD)",
        "BCA25102T PST (PD)",
        "BCA25102P PST (PD/ND)",
        "Break",
        "BCA25103P CA (ETC)",
        "BCA25103P CA (ETC)",
      ],
      Saturday: [
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
      ],
    },
  },
  bca_sem3: {
    Head: [
      "08:45-09:45",
      "09:45-10:45",
      "10:45-11:45",
      "11:45-12:45",
      "12:45-01:45",
      "01:45-02:45",
      "02:45-03:45",
    ],
    Days: {
      Monday: [
        "SEC-III",
        "MDC-III",
        "DBMS (MRS)",
        "OS (AA)",
        "Break",
        "OOP (JB)",
        "Lab: OOP (JB)",
      ],
      Tuesday: [
        "AEC-III",
        "DBMS (MRS)",
        "LIBRARY",
        "OS (AA)",
        "Break",
        "Club",
        "Club",
      ],
      Wednesday: [
        "SEC",
        "MDC",
        "DBMS",
        "OOP (JB)",
        "Break",
        "Lab: OOP (JB)",
        "Lab: OOP (JB)",
      ],
      Thursday: [
        "AEC-III",
        "BCA23203T OS (AA)",
        " OOP (JB)",
        "Lab: OOP (JB)",
        "Break",
        "DBMS (MRS)",
        "Lab: DBMS (MRS)",
      ],
      Friday: [
        "SEC-III",
        "MDC-III",
        "DBMS (MRS)",
        "Lab: DBMS (MRS)",
        "Break",
        "OOP (JB)",
        "Lab: OOP (JB)",
      ],
      Saturday: [
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
      ],
    },
  },
  bca_sem5: {
    Head: [
      "08:45-09:45",
      "09:45-10:45",
      "10:45-11:45",
      "11:45-12:45",
      "12:45-01:45",
      "01:45-02:45",
      "02:45-03:45",
    ],
    Days: {
      Monday: [
        "BCA23304T NLP PD",
        "BCA23304P NLP PD",
        "PROJECT RP",
        "LIBRARY",
        "Break",
        "BCA23303T CS RP",
        "BCA23303P CS RP",
      ],
      Tuesday: [
        "VAC-IV",
        "AECC-IV",
        "BCA23301T CN JB",
        "LIBRARY",
        "Break",
        "BCA23302T DAA AD",
        "BCA23302T DAA AD",
      ],
      Wednesday: [
        "BCA23304T NLP PD",
        "BCA23304P NLP PD",
        "BCA23303T CS RP",
        "Break",
        "BCA23303P CS RP",
        "PROJECT MRS",
        "PROJECT MRS",
      ],
      Thursday: [
        "VAC-IV",
        "AECC-IV",
        "BCA23302T DAA AD",
        "BCA23302T DAA AD",
        "Break",
        "BCA23301T CN JB",
        "PROJECT(RP)",
      ],
      Friday: [
        "BCA23304T NLP PD",
        "BCA23304P NLP PD",
        "LIBRARY/DBMS",
        "BCA23301T CN JB",
        "Break",
        "BCA23301T CN JB",
        "PROJECT RP",
      ],
      Saturday: [
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
        "TEST/ REMEDIAL",
      ],
    },
  },
};

const containerElement = document.querySelector("#table-container");
const selectElement = document.querySelector("#select-semseter");
// const submitElement = document.querySelector("#semester-submit-btn");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let customTime = new Date();
const LoadSundayAlert = () => {
  const divContainer = document.createElement("div");
  divContainer.className =
    "position-relative p-5 text-center text-muted rounded d-5";
    
    divContainer.innerHTML = `
    <img class="bi mt-5 mb-3 text-center w-100 w-sm-100 w-md-75 w-lg-50" src="assets/umaru-sleeping.gif" alt="anya-sumaru sleeping"aria-hidden="true" />
    <h2 class="text-body-emphasis">It's Sunday</h2>
    <p class="text-muted">Take it slow and enjoy the moment.</p>
    `;
    containerElement.appendChild(divContainer);
  };
  
  const LoadTodayRoutine = (semseter) => {
    customTime = new Date();
    const dayNumber = customTime.getDay();
    if (dayNumber == 0) {
      LoadSundayAlert();
      return;
    }
    const subjects = routine[`bca_sem${semseter}`].Days[days[dayNumber]];
    const timeDurations = routine[`bca_sem${semseter}`].Head;

    // root sturcture for the table
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    
    table.className =
      " table table-striped caption-top";
    
    // thead.classList.add("table-dark");
    
    const tbody = document.createElement("tbody");
    
    tbody.classList.add("table-striped");

    const caption = document.createElement("caption");
    caption.textContent = days[dayNumber];
    table.appendChild(caption);

  // head row
  const headRow = document.createElement("tr");
  headRow.innerHTML = '<th scope="col">TimeSlot</th><th scope="col">Subject</th>';
  thead.appendChild(headRow);

  // time related
  let hour = 8;
  const mins = 45;
  const currentHour = customTime.getHours();
  const currentMins = customTime.getMinutes();
  // table body
  for (let i = 0; i < subjects.length; i++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");
    th.textContent = timeDurations[i];
    td.textContent = subjects[i];
    // console.log(`hour: ${hour} === ${currentHour} ${hour === currentHour}`);
    // console.log(`mins: ${currentMins} >= ${mins} ${currentMins >= mins }`);
    // console.log(`mins: ${currentMins} <= ${mins} ${currentMins <= mins}`);
    
    // colored the current subject ongoing
    if (hour === currentHour && currentMins >= mins) {
      tr.className = "table-active table-primary";
    } else if (hour === currentHour - 1 && currentMins < mins) {
      tr.className = "table-active table-primary";
    }
    
    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr);
    hour++;
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  containerElement.appendChild(table);
};

LoadTodayRoutine(3);

selectElement.addEventListener("change", (e) => {
  e.preventDefault();
  containerElement.innerHTML = "";
  const semester = selectElement.value;
  LoadTodayRoutine(semester);
});
