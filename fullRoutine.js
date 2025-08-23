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
        "OS (AA)",
        "OOP (JB)",
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

const container = document.getElementById("table-wrapper");
const selectSemseterElement = document.getElementById("select-semseter");

// function to generate the Table
const CreateRoutineTable = (semseter) => {
  const semseterData = routine[`bca_sem${semseter}`];

  // create for root elements of the table
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  tbody.className="table-group-divider fw-light"
  // setting the table additonal styles
  table.className =
    "table text-nowrap table-dark table-striped table-hover caption-top";

  // caption appended to the table
  const caption = document.createElement("caption");
  caption.textContent = "Semester" + semseter;
  table.appendChild(caption);

  // Add "Days" as the first column
  const headRow = document.createElement("tr");
  const headData = document.createElement("th");
  headData.textContent = "Days";
  headRow.appendChild(headData);

  // Appending the th to the thead
  semseterData.Head.forEach((timeDuration) => {
    const th = document.createElement("th");
    th.textContent = timeDuration;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);

  // Append the th(dayname) and td to the tbody
  for (const day in semseterData.Days) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.className= "fw-medium";
    th.textContent = day;
    tr.appendChild(th);
    semseterData.Days[day].forEach((subject) => {
      const td = document.createElement("td");
      td.textContent = subject;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }
  // handle the saturday separately
  const saturdayRow = document.createElement("tr");
  saturdayRow.innerHTML =
    '<th>Saturday</th><td colspan="8" class="text-center"> TEST/ REMEDIAL</td>';
  tbody.appendChild(saturdayRow);

  // finally adding all together
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
};

CreateRoutineTable(3);

selectSemseterElement.addEventListener("change", (e) => {
  e.preventDefault();
  if (selectSemseterElement.value === "none") return;
  container.innerHTML = "";
  const selectedSem = `bca_sem${selectSemseterElement.value}`;
  CreateRoutineTable(selectSemseterElement.value);
});
