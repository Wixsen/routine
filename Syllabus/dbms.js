import {createModuleSection} from './moduleUtil.js'


const bcaSem3Course = [
  {
    title: "Introduction to Databases",
    moduleList: [
      "Introduction",
      "Definition of database",
      "An example",
      "Characteristics of the Database Approach",
      "Actors on Scene",
      "Workers behind the scene",
      "DBMS",
      "Advantages of Using the DBMS Approach",
      "A Brief History of Database Applications",
      "When Not to Use a DBMS",
    ],
  },
  {
    title: "Introduction to Database Design",
    moduleList: [
      "Data models",
      "Database Design and ER Diagrams",
      "Entities",
      "Attributes and Entity Sets",
      "Relationships and Relationship Sets",
      "Additional Features of the ER Model",
      "Conceptual Design with the ER Model",
      "Conceptual Design for Large Enterprises",
    ],
  },
  {
    title: "Overview of Database Languages and Architectures",
    moduleList: [
      "Data Models",
      "Schemas and Instances",
      "Three-Schema Architecture and Data Independence",
      "Database Languages and Interfaces",
      "The Database System Environment",
      "Centralized and Client/Server Architecture for DBMSs",
      "Classification of Database Management Systems",
    ],
  },
  {
    title: "Relational Model",
    moduleList: [
      "Introduction to the Relational Model",
      "Integrity Constraints over Relations",
      "Enforcing Integrity Constraints",
      "Querying Relational Data",
      "Logical Database Design: ER to Relational",
      "Introduction to Views",
      "Destroying/Altering Tables and Views",
    ],
  },
  {
    title: "Relational Algebra and SQL",
    moduleList: [
      "Selection and Projection",
      "Set Operations",
      "Renaming",
      "Joins",
      "Division",
      "Examples of Algebra Queries",
      "Queries",
      "Constraints",
      "Triggers",
      "Basic SQL Query Form",
      "UNION, INTERSECT and EXCEPT",
      "Nested Queries",
      "Aggregate Operators",
      "Null Values",
      "Complex Integrity Constraints in SQL",
      "Triggers and Active Databases",
      "Designing and Active Databases",
    ],
  },
  {
    title: "Introduction to Normalization Using Functional Dependencies",
    moduleList: [
      "Informal Design Guidelines for Relation Schema",
      "Functional Dependencies",
      "Normal Forms Based on Primary Keys",
      "General Definitions of Second and Third Normal Forms",
      "Boyce-Codd Normal Form",
      "Multivalued Dependency and Fourth Normal Form",
      "Join Dependencies and Fifth Normal Form",
    ],
  },
  {
    title: "Transaction Management",
    moduleList: [
      "Transaction Concept",
      "A Simple Transaction Model",
      "Storage Structure",
      "ACID Properties",
      "Serializability",
      "Transaction Isolation Levels",
    ],
  },
];

const moduleSection = document.querySelector("#moduleSection");
createModuleSection(moduleSection, "DBMS", bcaSem3Course);