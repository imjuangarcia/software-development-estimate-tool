// This is just some sample data so you don't have to think of your own!
const tasks = {
  task1: {
    taskName: "Specification of Requirements",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    section: "Definition"
  },
  task2: {
    taskName: "Project Plan Update",
    minHours: 0.5,
    avgHours: 0.5,
    maxHours: 1,
    expectedHours: 0.58,
    section: "Definition"
  },
  task3: {
    taskName: "Mockups Revision and Design Suggestions",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Initiation"
  },
  task4: {
    taskName: "Solution Architecture",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    section: "Initiation"
  },
  task5: {
    taskName: "Development Environment Setup",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    section: "Initiation"
  },
  task6: {
    taskName: "Project Management Tooling Setup",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Initiation"
  },
  task7: {
    taskName: "Homepage Layout",
    minHours: 2,
    avgHours: 3,
    maxHours: 3,
    expectedHours: 2.88,
    section: "Realization"
  },
  task8: {
    taskName: "Contact Us Layout",
    minHours: 2,
    avgHours: 3,
    maxHours: 3,
    expectedHours: 2.88,
    section: "Realization"
  },
  task9: {
    taskName:
      "Contact Us Functionality: Form Submission, Thank You and Error pages, and redirect to homepage",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.57,
    section: "Realization"
  },
  task10: {
    taskName: "Our Services Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    section: "Realization"
  },
  task11: {
    taskName: "Our Team Layout",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.57,
    section: "Realization"
  },
  task12: {
    taskName: "Search Results Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    section: "Realization"
  },
  task13: {
    taskName: "Log In Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    section: "Realization"
  },
  task14: {
    taskName: "Forgot Password Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    section: "Realization"
  },
  task15: {
    taskName: "Add Item Layout",
    minHours: 2,
    avgHours: 2,
    maxHours: 3,
    expectedHours: 2.16,
    section: "Realization"
  },
  task16: {
    taskName: "Available Items Layout",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    section: "Realization"
  },
  task17: {
    taskName: "Homepage Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    section: "Adaptation"
  },
  task18: {
    taskName: "Contact Us Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    section: "Adaptation"
  },
  task19: {
    taskName: "Our Services Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    section: "Adaptation"
  },
  task20: {
    taskName: "Our Team Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    section: "Adaptation"
  },
  task21: {
    taskName: "Search Results Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    section: "Adaptation"
  },
  task22: {
    taskName: "Log In Responsive Layout",
    minHours: 0.5,
    avgHours: 0.5,
    maxHours: 1,
    expectedHours: 0.58,
    section: "Adaptation"
  },
  task23: {
    taskName: "Forgot Password Responsive Layout",
    minHours: 0.5,
    avgHours: 0.5,
    maxHours: 1,
    expectedHours: 0.58,
    section: "Adaptation"
  },
  task24: {
    taskName: "Add Item Responsive Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    section: "Adaptation"
  },
  task25: {
    taskName: "Available Items Responsive Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    section: "Adaptation"
  },
  task26: {
    taskName: "Website Testing and Local Bug Fixing",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    section: "Testing"
  },
  task27: {
    taskName: "Website Testing and In-Device Bug Fixing",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.57,
    section: "Testing"
  },
  task28: {
    taskName: "Follow up and Rework based on Feedback",
    minHours: 2,
    avgHours: 3,
    maxHours: 4,
    expectedHours: 2.57,
    section: "Testing"
  },
  task29: {
    taskName: "Database Setup and Configuration",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    section: "Backend: Database"
  },
  task30: {
    taskName: "Data Model Creation: Items",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    section: "Backend: Database"
  },
  task31: {
    taskName: "Data Model Creation: Users and Permissions",
    minHours: 2,
    avgHours: 3,
    maxHours: 3,
    expectedHours: 2.83,
    section: "Backend: Database"
  },
  task32: {
    taskName: "Geolocalization API to show Items on a Map",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    section: "Backend: APIs"
  },
  task33: {
    taskName: "Search Items API",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    section: "Backend: APIs"
  },
  task34: {
    taskName: "Items Creation and Edition",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    section: "Backend"
  },
  task35: {
    taskName: "Image Uploading and Resizing",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Backend"
  },
  task36: {
    taskName: "Slug Creation for URLs",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Backend"
  },
  task37: {
    taskName: "User Account Creation and Database Storage",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Backend"
  },
  task38: {
    taskName: "Log In and Log Out Flow",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Backend"
  },
  task39: {
    taskName: "User Data Edition",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Backend"
  },
  task40: {
    taskName: "Password Reset Flow",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Backend"
  },
  task41: {
    taskName: "Automated Email Sending",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Backend"
  },
  task42: {
    taskName: "Items Pagination",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    section: "Backend"
  },
  task43: {
    taskName: "Filtering Logic",
    minHours: 2,
    avgHours: 3,
    maxHours: 3,
    expectedHours: 2.83,
    section: "Backend"
  }
};

export default tasks;
