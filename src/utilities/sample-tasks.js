// This is just some sample data so you don't have to think of your own!
const tasks = {
  task_a_01: {
    taskName: "Specification of Requirements",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    sectionName: "Definition"
  },
  task_a_02: {
    taskName: "Project Plan Update",
    minHours: 0.5,
    avgHours: 0.5,
    maxHours: 1,
    expectedHours: 0.58,
    sectionName: "Definition"
  },
  task_b_01: {
    taskName: "Mockups Revision and Design Suggestions",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Initiation"
  },
  task_b_02: {
    taskName: "Solution Architecture",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    sectionName: "Initiation"
  },
  task_b_03: {
    taskName: "Development Environment Setup",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    sectionName: "Initiation"
  },
  task_b_04: {
    taskName: "Project Management Tooling Setup",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Initiation"
  },
  task_c_001: {
    taskName: "Homepage Layout",
    minHours: 2,
    avgHours: 3,
    maxHours: 3,
    expectedHours: 2.88,
    sectionName: "Realization"
  },
  task_c_002: {
    taskName: "Contact Us Layout",
    minHours: 2,
    avgHours: 3,
    maxHours: 3,
    expectedHours: 2.88,
    sectionName: "Realization"
  },
  task_c_003: {
    taskName:
      "Contact Us Functionality: Form Submission, Thank You and Error pages, and redirect to homepage",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.57,
    sectionName: "Realization"
  },
  task_c_004: {
    taskName: "Our Services Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Realization"
  },
  task_c_005: {
    taskName: "Our Team Layout",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.57,
    sectionName: "Realization"
  },
  task_c_006: {
    taskName: "Search Results Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Realization"
  },
  task_c_007: {
    taskName: "Log In Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Realization"
  },
  task_c_008: {
    taskName: "Forgot Password Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Realization"
  },
  task_c_009: {
    taskName: "Add Item Layout",
    minHours: 2,
    avgHours: 2,
    maxHours: 3,
    expectedHours: 2.16,
    sectionName: "Realization"
  },
  task_c_0010: {
    taskName: "Available Items Layout",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    sectionName: "Realization"
  },
  task_d_001: {
    taskName: "Homepage Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    sectionName: "Adaptation"
  },
  task_d_002: {
    taskName: "Contact Us Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    sectionName: "Adaptation"
  },
  task_d_003: {
    taskName: "Our Services Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    sectionName: "Adaptation"
  },
  task_d_004: {
    taskName: "Our Team Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    sectionName: "Adaptation"
  },
  task_d_005: {
    taskName: "Search Results Responsive Layout",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    sectionName: "Adaptation"
  },
  task_d_006: {
    taskName: "Log In Responsive Layout",
    minHours: 0.5,
    avgHours: 0.5,
    maxHours: 1,
    expectedHours: 0.58,
    sectionName: "Adaptation"
  },
  task_d_007: {
    taskName: "Forgot Password Responsive Layout",
    minHours: 0.5,
    avgHours: 0.5,
    maxHours: 1,
    expectedHours: 0.58,
    sectionName: "Adaptation"
  },
  task_d_008: {
    taskName: "Add Item Responsive Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Adaptation"
  },
  task_d_009: {
    taskName: "Available Items Responsive Layout",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Adaptation"
  },
  task_e_001: {
    taskName: "Website Testing and Local Bug Fixing",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Testing"
  },
  task_e_002: {
    taskName: "Website Testing and In-Device Bug Fixing",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.57,
    sectionName: "Testing"
  },
  task_e_003: {
    taskName: "Follow up and Rework based on Feedback",
    minHours: 2,
    avgHours: 3,
    maxHours: 4,
    expectedHours: 2.57,
    sectionName: "Testing"
  },
  task_f_001: {
    taskName: "Database Setup and Configuration",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.08,
    sectionName: "Backend: Database"
  },
  task_f_002: {
    taskName: "Data Model Creation: Items",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    sectionName: "Backend: Database"
  },
  task_f_003: {
    taskName: "Data Model Creation: Users and Permissions",
    minHours: 2,
    avgHours: 3,
    maxHours: 3,
    expectedHours: 2.83,
    sectionName: "Backend: Database"
  },
  task_g_001: {
    taskName: "Geolocalization API to show Items on a Map",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    sectionName: "Backend: APIs"
  },
  task_g_002: {
    taskName: "Search Items API",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    sectionName: "Backend: APIs"
  },
  task_h_001: {
    taskName: "Items Creation and Edition",
    minHours: 1,
    avgHours: 2,
    maxHours: 2,
    expectedHours: 1.83,
    sectionName: "Backend"
  },
  task_h_002: {
    taskName: "Image Uploading and Resizing",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Backend"
  },
  task_h_003: {
    taskName: "Slug Creation for URLs",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Backend"
  },
  task_h_004: {
    taskName: "User Account Creation and Database Storage",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Backend"
  },
  task_h_005: {
    taskName: "Log In and Log Out Flow",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Backend"
  },
  task_h_006: {
    taskName: "User Data Edition",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Backend"
  },
  task_h_007: {
    taskName: "Password Reset Flow",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Backend"
  },
  task_h_008: {
    taskName: "Automated Email Sending",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Backend"
  },
  task_h_009: {
    taskName: "Items Pagination",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Backend"
  },
  task_h_010: {
    taskName: "Filtering Logic",
    minHours: 2,
    avgHours: 3,
    maxHours: 3,
    expectedHours: 2.83,
    sectionName: "Backend"
  },
  task_w_001: {
    taskName: "Wordpress Installation",
    minHours: 0.5,
    avgHours: 0.5,
    maxHours: 1,
    expectedHours: 0.58,
    sectionName: "Wordpress"
  },
  task_w_002: {
    taskName: "Theme Installation & Configuration",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Wordpress"
  },
  task_w_003: {
    taskName: "Design adjustments to Theme",
    minHours: 4,
    avgHours: 6,
    maxHours: 8,
    expectedHours: 6,
    sectionName: "Wordpress"
  },
  task_w_004: {
    taskName: "Menus & Taxonomy Creation",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Wordpress"
  },
  task_w_005: {
    taskName: "Wordpress Installation Backup",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Wordpress"
  },
  task_w_006: {
    taskName: "Security Plugins Installation & Configuration",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Wordpress"
  },
  task_w_007: {
    taskName: "User Creation & Permissions Setup",
    minHours: 0.5,
    avgHours: 1,
    maxHours: 1,
    expectedHours: 0.91,
    sectionName: "Wordpress"
  },
  task_w_008: {
    taskName: "Content Population",
    minHours: 3,
    avgHours: 4,
    maxHours: 6,
    expectedHours: 4.16,
    sectionName: "Wordpress"
  },
  task_w_009: {
    taskName: "Content Update Tutorials",
    minHours: 1,
    avgHours: 1,
    maxHours: 2,
    expectedHours: 1.16,
    sectionName: "Wordpress"
  }
};

export default tasks;
