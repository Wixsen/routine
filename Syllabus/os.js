import {createModuleSection} from './moduleUtil.js'

const bcaSem3Course = [
  {
    title: "Introduction and Historical Perspective",
    moduleList: [
      "Operating System concept and its role",
      "Batch processing",
      "Multiprogramming",
      "Time-sharing",
      "Distributed system",
      "Functions, components and structure of an operating system",
    ],
  },
  {
    title: "Process Management",
    moduleList: [
      "Structure of a process",
      "PCB",
      "Operations on processes",
      "Support for concurrent processes",
      "Trade-off sequential and concurrent processing with examples in implementation",
      "Shared data",
      "Critical sections",
      "Mutual exclusion",
      "Busy form of waiting",
      "Lock and unlock primitives",
      "Semaphore",
      "Block and wakeup",
    ],
  },
  {
    title: "I/O Systems",
    moduleList: [
      "I/O Management device controller",
      "Device drivers",
      "I/O Software goals and structure",
      "Interrupt and handling mechanisms",
      "Application of I/O Interface",
      "Terminal handling",
      "Block and character devices",
      "Vectored I/O",
    ],
  },
  {
    title: "Memory Management",
    moduleList: [
      "Address space management: address binding, logical vs physical address space",
      "Static and dynamic memory management protection and sharing",
      "Contiguous and non-contiguous memory allocation",
      "Fragmentation and solution",
      "Swapping",
      "Paging and Segmentation",
      "Page table",
      "Page replacement and space allocation policies",
    ],
  },
  {
    title: "File System and Disk Management",
    moduleList: [
      "File concept and organization",
      "File management strategies",
      "File system structure and access methods",
      "Tradeoffs",
      "Directory structures",
      "Allocation Methods: contiguous, linked, indexed, FAT and I-node structures",
    ],
  },
];

const moduleSection = document.querySelector("#moduleSection");
createModuleSection(moduleSection, "OS", bcaSem3Course);