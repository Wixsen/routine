export const dbmsCourseData = [
  {
    title: "Introduction to Databases",
    moduleList: [
      {
        topic: "Database Basics",
        nestList: [
          "Introduction, definition of database",
          "An Example",
          "Characteristics of the Database Approach",
        ],
      },
      {
        topic: "Database Actors",
        nestList: ["Actors on Scene", "Workers behind the scene"],
      },
      {
        topic: "DBMS Overview",
        nestList: [
          "DBMS",
          "Advantages of Using the DBMS Approach",
          "A Brief History of Database Applications",
          "When Not to Use a DBMS",
        ],
      },
    ],
    lectures: 5,
  },
  {
    title: "Introduction to Database Design",
    moduleList: [
      { topic: "Data models" },
      { topic: "Database Design and ER Diagrams" },
      {
        topic: "Entity-Relationship Model",
        nestList: [
          "Entities and Entity Sets",
          "Attributes",
          "Relationships and Relationship Sets",
          "Additional Features of the ER Model",
        ],
      },
      {
        topic: "Conceptual Design",
        nestList: [
          "Conceptual Design with the ER Model",
          "Conceptual Design for Large Enterprises",
        ],
      },
    ],
    lectures: 10,
  },
  {
    title: "Overview of Database Languages and Architectures",
    moduleList: [
      {
        topic: "Database Structure",
        nestList: ["Data Models", "Schemas and Instances"],
      },
      {
        topic: "Database Architecture",
        nestList: [
          "Three-Schema Architecture",
          "Data Independence",
          "Database Languages and Interfaces",
          "The Database System Environment",
          "Centralized and Client/Server Architecture for DBMSs",
          "Classification of Database Management Systems",
        ],
      },
    ],
    lectures: 5,
  },
  {
    title: "Relational Model",
    moduleList: [
      { topic: "Introduction to the Relational Model" },
      {
        topic: "Constraints",
        nestList: ["Integrity Constraints over Relations", "Enforcing Integrity Constraints"],
      },
      { topic: "Querying Relational Data" },
      {
        topic: "Logical Database Design",
        nestList: ["ER to Relational", "Introduction to Views"],
      },
      { topic: "Destroying/Altering Tables and Views" },
    ],
    lectures: 5,
  },
  {
    title: "Relational Algebra and SQL",
    moduleList: [
      {
        topic: "Relational Algebra",
        nestList: [
          "Selection and Projection",
          "Set Operations",
          "Renaming",
          "Joins",
          "Division",
          "More Examples of Algebra Queries",
        ],
      },
      {
        topic: "SQL",
        nestList: [
          "Queries, Constraints, Triggers",
          "Basic SQL Query Form",
          "UNION, INTERSECT, and EXCEPT",
          "Nested Queries",
          "Aggregate Operators",
          "Null Values",
        ],
      },
      {
        topic: "Advanced SQL",
        nestList: [
          "Complex Integrity Constraints in SQL",
          "Triggers and Active Databases",
          "Designing Active Databases",
        ],
      },
    ],
    lectures: 10,
  },
  {
    title: "Introduction to Normalization Using Functional Dependencies",
    moduleList: [
      { topic: "Informal Design Guidelines for Relation Schemas" },
      {
        topic: "Functional Dependencies and Normal Forms",
        nestList: [
          "Normal Forms Based on Primary Keys",
          "General Definitions of 2NF and 3NF",
          "Boyce-Codd Normal Form",
          "Multivalued Dependency and 4NF",
          "Join Dependencies and 5NF",
        ],
      },
    ],
    lectures: 10,
  },
  {
    title: "Transaction Management",
    moduleList: [
      { topic: "Transaction Concept" },
      { topic: "A Simple Transaction Model" },
      { topic: "Storage Structure" },
      {
        topic: "ACID Properties",
        nestList: ["Atomicity", "Consistency", "Isolation", "Durability"],
      },
      {
        topic: "Concurrency Control",
        nestList: ["Serializability", "Transaction Isolation Levels"],
      },
    ],
    lectures: 5,
  },
];


export const oopCourseData = [
  {
    title: "Introduction",
    moduleList: [
      { topic: "Java's History" },
      { topic: "Importance of Java for the Internet" },
      { topic: "Java’s Magic - Bytecode" },
      { topic: "Its Features" },
      { topic: "Java Virtual Machine Concepts" },
      { topic: "Primitive Data Type and Variables" },
      { topic: "Java Operators" },
      { topic: "Expressions" },
      { topic: "Statements and Arrays" },
    ],
    lectures: 8,
  },
  {
    title: "Classes and Object",
    moduleList: [
      { topic: "Class Fundamentals" },
      { topic: "Creating objects" },
      { topic: "Assigning object reference variables" },
      { topic: "Introducing Methods" },
      { topic: "Static methods" },
      { topic: "Constructors and types of constructor" },
      { topic: "Overloading constructors" },
      { topic: "this Keyword" },
      { topic: "Using Objects as Parameters" },
      { topic: "Argument passing" },
      { topic: "Returning objects" },
      { topic: "Method overloading" },
    ],
    lectures: 10,
  },
  {
    title: "Inheritance",
    moduleList: [
      { topic: "Inheritance Basics" },
      { topic: "Access Control" },
      { topic: "Multilevel inheritance" },
      { topic: "Method Overriding" },
      { topic: "Abstract Classes" },
      {
        topic: "Polymorphism",
        nestList: ["final keyword"],
      },
    ],
    lectures: 7,
  },
  {
    title: "Packages, Abstract Class and Interface",
    moduleList: [
      { topic: "Defining Package" },
      { topic: "CLASSPATH" },
      { topic: "Package naming" },
      { topic: "Accessibility of Packages" },
      { topic: "Using package members" },
      { topic: "Interfaces: Implementing Interfaces" },
      { topic: "Interface and Abstract Classes" },
      { topic: "Exceptions Handling: Exception" },
      { topic: "Handling of Exception" },
      { topic: "Using try-catch" },
      { topic: "Catching multiple exceptions" },
      { topic: "Using finally clause" },
      { topic: "Types of Exceptions" },
      { topic: "Throwing Exceptions" },
    ],
    lectures: 10,
  },
  {
    title: "Multithreading and Applet",
    moduleList: [
      {
        topic: "Multithreading Programming",
        nestList: [
          "The Java Thread Model",
          "Understanding Threads",
          "Creating a Thread",
          "Creating Multiple Threads",
          "Thread Priorities",
        ],
      },
      {
        topic: "Creating Applets in Java",
        nestList: [
          "Applet Basics",
          "Applet Architecture",
          "Applet Life Cycle",
          "Simple Applet Display Methods",
          "The HTML APPLET Tag Passing Parameters to Applets",
        ],
      },
    ],
    lectures: 10,
  },
];


export const osCourseData = [
  {
    title: "Introduction and Historical Perspective",
    moduleList: [
      {
        topic: "Operating System concept and its role",
        nestList: ["Batch processing", "Multiprogramming", "Time-sharing", "Distributed system"],
      },
      { topic: "Functions of Operating System" },
      { topic: "Components and structure of an Operating System" },
    ],
    lectures: 4,
  },
  {
    title: "Process Management",
    moduleList: [
      { topic: "Structure of a process, PCB" },
      { topic: "Operations on processes" },
      {
        topic: "Support for concurrent processes",
        nestList: ["Trade-off sequential vs concurrent processing", "Examples in implementation"],
      },
      {
        topic: "Synchronization",
        nestList: ["Shared data", "Critical sections", "Mutual exclusion", "Busy form of waiting"],
      },
      {
        topic: "Process coordination",
        nestList: ["Lock and unlock primitives", "Semaphore", "Block and wakeup"],
      },
    ],
    lectures: 14,
  },
  {
    title: "I/O Systems",
    moduleList: [
      { topic: "I/O Management device controller" },
      { topic: "Device drivers" },
      { topic: "I/O Software goals and structure" },
      {
        topic: "Interrupt and handling mechanisms",
        nestList: ["Application of I/O Interface", "Terminal handling"],
      },
      {
        topic: "I/O Devices",
        nestList: ["Block devices", "Character devices", "Vectored I/O"],
      },
    ],
    lectures: 6,
  },
  {
    title: "Memory Management",
    moduleList: [
      {
        topic: "Address space management",
        nestList: ["Address binding", "Logical vs physical address space"],
      },
      { topic: "Static and dynamic memory management protection and sharing" },
      {
        topic: "Memory allocation",
        nestList: ["Contiguous", "Non-contiguous", "Fragmentation and solution"],
      },
      {
        topic: "Memory techniques",
        nestList: ["Swapping", "Paging", "Segmentation"],
      },
      {
        topic: "Page management",
        nestList: ["Page table", "Page replacement", "Space allocation policies"],
      },
    ],
    lectures: 8,
  },
  {
    title: "File System and Disk Management",
    moduleList: [
      { topic: "File concept and organization" },
      { topic: "File management strategies" },
      {
        topic: "File system structure and access methods",
        nestList: ["Tradeoffs", "Directory structures"],
      },
      {
        topic: "Allocation Methods",
        nestList: ["Contiguous", "Linked", "Indexed"],
      },
      { topic: "FAT and I-node structures" },
    ],
    lectures: 8,
  },
];
