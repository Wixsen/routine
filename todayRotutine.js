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
      // Saturday: [
      //     "TEST/ REMEDIAL",
      //     "TEST/ REMEDIAL",
      //     "TEST/ REMEDIAL",
      //     "TEST/ REMEDIAL",
      //     "TEST/ REMEDIAL",
      //     "TEST/ REMEDIAL",
      //     "TEST/ REMEDIAL",
      // ],
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
        "MDC-III",
        "SEC-III",
        "BCA23202T DBMS (MRS)",
        "BCA23203T OS (AA)",
        "Break",
        "BCA23201T OOP (JB)",
        "BCA23201P OOP (JB)",
      ],
      Tuesday: [
        "BCA23202T DBMS (MRS)",
        "AEC-III",
        "BCA23202P DBMS (MRS)",
        "BCA23202P DBMS (MRS)",
        "Break",
        "BCA23203T OS (AA)",
        "BCA23203T OS (AA)",
      ],
      Wednesday: [
        "MDC-III",
        "SEC-III",
        "LIBRARY",
        "BCA23201T OOP (JB)",
        "Break",
        "BCA23201P OOP (JB)",
        "BCA23201P OOP (JB)",
      ],
      Thursday: [
        "BCA23203T OS (AA)",
        "AEC-III",
        "BCA23201T OOP (JB)",
        "BCA23201P OOP (JB)",
        "Break",
        "BCA23202T DBMS (MRS)",
        "BCA23202P DBMS (MRS)",
      ],
      Friday: [
        "MDC-III",
        "SEC-III",
        "BCA23202T DBMS (MRS)",
        "BCA23202P DBMS (MRS)",
        "Break",
        "BCA23201T OOP (JB)",
        "BCA23201P OOP (JB)",
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
        "LIBRARY",
        "BCA23301T CN JB",
        "Break",
        "BCA23301T CN JB",
        "PROJECT RP",
      ],
      //         Saturday: [
      //             "TEST/ REMEDIAL",
      //             "TEST/ REMEDIAL",
      //             "TEST/ REMEDIAL",
      //             "TEST/ REMEDIAL",
      //             "TEST/ REMEDIAL",
      //             "TEST/ REMEDIAL",
      //             "TEST/ REMEDIAL",
      //   ],
    },
  },
};

const containerElement = document.querySelector("#table-container");
const selectElement = document.querySelector("#select-semseter");
const submitElement = document.querySelector('#semester-submit-btn');
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const LoadTodayRoutine = (semseter) => {
  const dayNumber = new Date().getDay() - 1;

  const subjects = routine[`bca_sem${semseter}`].Days[days[dayNumber]];
  const timeDurations = routine[`bca_sem${semseter}`].Head;

  // root sturcture for the table
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  
  table.className=" table table-dark table-striped table-hover caption-top table-sm";
  const caption = document.createElement("caption");
  caption.textContent = days[dayNumber];
   table.appendChild(caption);


  // head row
  const headRow = document.createElement("tr");
  headRow.innerHTML = "<th>TimeSlot</th><th>Subject</th>";
  thead.appendChild(headRow);

  // table body
  for (let i = 0; i < subjects.length; i++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");

    th.textContent = timeDurations[i];
    td.textContent = subjects[i];

    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  containerElement.appendChild(table);
};

LoadTodayRoutine(3);

submitElement.addEventListener("click",(e) => {
    e.preventDefault();
    containerElement.innerHTML = "";
    const semester = selectElement.value;
    LoadTodayRoutine(semester);
});