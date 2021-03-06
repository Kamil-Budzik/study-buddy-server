const data = [
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00046a',
    },
    firstName: 'Ronalda',    lastName: 'Fust',
    attendance: 80,
    average: 2.7,
    group: 'A',
    course: 'Consumer Durables',
    grades: [
      {
        subject: 'VP Quality Control',
        average: 4.4,
      },
      {
        subject: 'Design Engineer',
        average: 2.7,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00046b',
    },
    firstName: 'Claudia',
    lastName: 'Kittman',
    attendance: 34,
    average: 4.5,
    group: 'B',
    course: 'Consumer Services',
    grades: [
      {
        subject: 'Clinical Specialist',
        average: 2.3,
      },
      {
        subject: 'Recruiter',
        average: 4.9,
      },
      {
        subject: 'Senior Cost Accountant',
        average: 4.5,
      },
      {
        subject: 'Senior Editor',
        average: 3.8,
      },
      {
        subject: 'Technical Writer',
        average: 1.1,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00046c',
    },
    firstName: 'Kissie',
    lastName: 'Blaza',
    attendance: 90,
    average: 3.9,
    group: 'C',
    course: 'Basic Industries',
    grades: [
      {
        subject: 'Web Designer III',
        average: 1.1,
      },
      {
        subject: 'Marketing Assistant',
        average: 1.8,
      },
      {
        subject: 'VP Sales',
        average: 5,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00046d',
    },
    firstName: 'Ketty',
    lastName: 'Russilll',
    attendance: 33,
    average: 2.6,
    group: 'D',
    course: 'Consumer Services',
    grades: [
      {
        subject: 'Research Assistant IV',
        average: 4.3,
      },
      {
        subject: 'VP Sales',
        average: 2.1,
      },
      {
        subject: 'Financial Analyst',
        average: 4.3,
      },
      {
        subject: 'Recruiting Manager',
        average: 1.2,
      },
      {
        subject: 'Account Executive',
        average: 3.1,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00046e',
    },
    firstName: 'Hazlett',
    lastName: 'Kemer',
    attendance: 11,
    average: 3.5,
    group: 'A',
    course: 'Energy',
    grades: [
      {
        subject: 'Automation Specialist II',
        average: 3.5,
      },
      {
        subject: 'Information Systems Manager',
        average: 1.8,
      },
      {
        subject: 'Food Chemist',
        average: 4.5,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00046f',
    },
    firstName: 'Delia',
    lastName: 'Chattelaine',
    attendance: 64,
    average: 2.5,
    group: 'B',
    course: 'Public Utilities',
    grades: [
      {
        subject: 'Quality Control Specialist',
        average: 1,
      },
      {
        subject: 'Editor',
        average: 2.2,
      },
      {
        subject: 'Geologist II',
        average: 1.1,
      },
      {
        subject: 'Web Developer III',
        average: 3.4,
      },
      {
        subject: 'Civil Engineer',
        average: 1.5,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000470',
    },
    firstName: 'Rutter',
    lastName: 'Yurenin',
    attendance: 63,
    average: 2.9,
    group: 'C',
    course: 'n/a',
    grades: [
      {
        subject: 'Software Engineer I',
        average: 3.6,
      },
      {
        subject: 'Chemical Engineer',
        average: 4.6,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000471',
    },
    firstName: 'Rolland',
    lastName: 'Shute',
    attendance: 81,
    average: 4.3,
    group: 'D',
    course: 'Consumer Services',
    grades: [
      {
        subject: 'Web Designer III',
        average: 4.9,
      },
      {
        subject: 'Software Engineer II',
        average: 4.7,
      },
      {
        subject: 'Staff Scientist',
        average: 3.8,
      },
      {
        subject: 'Staff Accountant IV',
        average: 1.4,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000472',
    },
    firstName: 'Ethelind',
    lastName: 'Macro',
    attendance: 23,
    average: 1.6,
    group: 'A',
    course: 'n/a',
    grades: [
      {
        subject: 'Internal Auditor',
        average: 2.9,
      },
      {
        subject: 'Occupational Therapist',
        average: 1,
      },
      {
        subject: 'Budget/Accounting Analyst III',
        average: 1.7,
      },
      {
        subject: 'Junior Executive',
        average: 2.9,
      },
      {
        subject: 'Actuary',
        average: 2.5,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000473',
    },
    firstName: 'Clifford',
    lastName: 'Goare',
    attendance: 50,
    average: 4,
    group: 'B',
    course: 'Health Care',
    grades: [
      {
        subject: 'Technical Writer',
        average: 2.2,
      },
      {
        subject: 'Quality Engineer',
        average: 3.7,
      },
      {
        subject: 'Internal Auditor',
        average: 3.1,
      },
      {
        subject: 'Civil Engineer',
        average: 4.2,
      },
      {
        subject: 'Director of Sales',
        average: 2.9,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000474',
    },
    firstName: 'Eliza',
    lastName: 'Gauchier',
    attendance: 68,
    average: 2.5,
    group: 'C',
    course: 'Finance',
    grades: [
      {
        subject: 'Librarian',
        average: 3.9,
      },
      {
        subject: 'Pharmacist',
        average: 4,
      },
      {
        subject: 'Help Desk Technician',
        average: 2,
      },
      {
        subject: 'Sales Representative',
        average: 2.2,
      },
      {
        subject: 'Computer Systems Analyst IV',
        average: 4.8,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000475',
    },
    firstName: 'Caria',
    lastName: 'Willcock',
    attendance: 52,
    average: 1.6,
    group: 'D',
    course: 'Technology',
    grades: [
      {
        subject: 'Health Coach II',
        average: 3.9,
      },
      {
        subject: 'Analyst Programmer',
        average: 2.4,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000476',
    },
    firstName: 'Allin',
    lastName: 'Ruby',
    attendance: 20,
    average: 4.7,
    group: 'A',
    course: 'Consumer Non-Durables',
    grades: [
      {
        subject: 'Nuclear Power Engineer',
        average: 3.4,
      },
      {
        subject: 'Senior Financial Analyst',
        average: 3.6,
      },
      {
        subject: 'GIS Technical Architect',
        average: 2.9,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000477',
    },
    firstName: 'Matthiew',
    lastName: 'Matusevich',
    attendance: 88,
    average: 3.6,
    group: 'B',
    course: 'Consumer Services',
    grades: [
      {
        subject: 'Marketing Assistant',
        average: 4.9,
      },
      {
        subject: 'Software Test Engineer II',
        average: 1.2,
      },
      {
        subject: 'Dental Hygienist',
        average: 4.4,
      },
      {
        subject: 'Geological Engineer',
        average: 3.3,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000478',
    },
    firstName: 'Rosina',
    lastName: 'Sexstone',
    attendance: 39,
    average: 2,
    group: 'C',
    course: 'Basic Industries',
    grades: [
      {
        subject: 'Marketing Manager',
        average: 1.5,
      },
      {
        subject: 'Budget/Accounting Analyst IV',
        average: 1.9,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000479',
    },
    firstName: 'Gerrard',
    lastName: 'Heighton',
    attendance: 14,
    average: 4.3,
    group: 'D',
    course: 'Consumer Services',
    grades: [
      {
        subject: 'Financial Advisor',
        average: 3,
      },
      {
        subject: 'Nurse',
        average: 4,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00047a',
    },
    firstName: 'Rickie',
    lastName: 'Lesurf',
    attendance: 41,
    average: 2.5,
    group: 'A',
    course: 'Finance',
    grades: [
      {
        subject: 'Nuclear Power Engineer',
        average: 4.6,
      },
      {
        subject: 'Human Resources Manager',
        average: 4.3,
      },
      {
        subject: 'Web Designer IV',
        average: 1,
      },
      {
        subject: 'Statistician III',
        average: 1.5,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00047b',
    },
    firstName: 'Zedekiah',
    lastName: 'Creegan',
    attendance: 12,
    average: 3,
    group: 'B',
    course: 'Finance',
    grades: [
      {
        subject: 'Marketing Manager',
        average: 1.9,
      },
      {
        subject: 'Director of Sales',
        average: 1.4,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00047c',
    },
    firstName: 'Thorin',
    lastName: 'Harroway',
    attendance: 55,
    average: 1.3,
    group: 'C',
    course: 'Health Care',
    grades: [
      {
        subject: 'Environmental Tech',
        average: 1.1,
      },
      {
        subject: 'Senior Quality Engineer',
        average: 2.6,
      },
      {
        subject: 'Community Outreach Specialist',
        average: 4.7,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00047d',
    },
    firstName: 'Tuesday',
    lastName: 'Durie',
    attendance: 46,
    average: 3,
    group: 'D',
    course: 'Public Utilities',
    grades: [
      {
        subject: 'Design Engineer',
        average: 2.5,
      },
      {
        subject: 'Data Coordiator',
        average: 1.3,
      },
      {
        subject: 'Assistant Manager',
        average: 4.5,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00047e',
    },
    firstName: 'Guenna',
    lastName: 'Peak',
    attendance: 6,
    average: 3.3,
    group: 'A',
    course: 'Consumer Services',
    grades: [
      {
        subject: 'Teacher',
        average: 3.8,
      },
      {
        subject: 'Software Consultant',
        average: 1.4,
      },
      {
        subject: 'Cost Accountant',
        average: 3.6,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00047f',
    },
    firstName: 'Alric',
    lastName: 'Bogue',
    attendance: 72,
    average: 3.2,
    group: 'B',
    course: 'Consumer Services',
    grades: [
      {
        subject: 'Actuary',
        average: 1.2,
      },
      {
        subject: 'Safety Technician II',
        average: 3.2,
      },
      {
        subject: 'Sales Representative',
        average: 3.6,
      },
      {
        subject: 'Analog Circuit Design manager',
        average: 1.3,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000480',
    },
    firstName: 'Danielle',
    lastName: 'Camois',
    attendance: 68,
    average: 4.3,
    group: 'C',
    course: 'Health Care',
    grades: [
      {
        subject: 'Sales Associate',
        average: 5,
      },
      {
        subject: 'Staff Accountant I',
        average: 1.7,
      },
      {
        subject: 'Registered Nurse',
        average: 2.2,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000481',
    },
    firstName: 'Jacquette',
    lastName: 'Maides',
    attendance: 66,
    average: 3.9,
    group: 'D',
    course: 'Finance',
    grades: [
      {
        subject: 'Information Systems Manager',
        average: 3.3,
      },
      {
        subject: 'Nuclear Power Engineer',
        average: 2.3,
      },
      {
        subject: 'GIS Technical Architect',
        average: 3.6,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000482',
    },
    firstName: 'Omar',
    lastName: 'Simmonds',
    attendance: 42,
    average: 2,
    group: 'A',
    course: 'Finance',
    grades: [
      {
        subject: 'Nurse Practicioner',
        average: 3.6,
      },
      {
        subject: 'Executive Secretary',
        average: 1.8,
      },
      {
        subject: 'VP Product Management',
        average: 4,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000483',
    },
    firstName: 'Malva',
    lastName: 'Elsom',
    attendance: 30,
    average: 4,
    group: 'B',
    course: 'Health Care',
    grades: [
      {
        subject: 'Systems Administrator I',
        average: 2.8,
      },
      {
        subject: 'Analog Circuit Design manager',
        average: 2.9,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000484',
    },
    firstName: 'Annaliese',
    lastName: 'Barthelme',
    attendance: 76,
    average: 2,
    group: 'C',
    course: 'Finance',
    grades: [
      {
        subject: 'Chief Design Engineer',
        average: 2.1,
      },
      {
        subject: 'Assistant Manager',
        average: 3.9,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000485',
    },
    firstName: 'Colet',
    lastName: 'Pellew',
    attendance: 12,
    average: 2.8,
    group: 'D',
    course: 'Basic Industries',
    grades: [
      {
        subject: 'Quality Control Specialist',
        average: 4,
      },
      {
        subject: 'GIS Technical Architect',
        average: 4,
      },
      {
        subject: 'Environmental Tech',
        average: 2,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000486',
    },
    firstName: 'Keely',
    lastName: 'Bastide',
    attendance: 71,
    average: 3.7,
    group: 'A',
    course: 'n/a',
    grades: [
      {
        subject: 'Structural Analysis Engineer',
        average: 1.2,
      },
      {
        subject: 'Compensation Analyst',
        average: 4.9,
      },
      {
        subject: 'Graphic Designer',
        average: 4.6,
      },
      {
        subject: 'Human Resources Assistant I',
        average: 2.3,
      },
      {
        subject: 'Director of Sales',
        average: 4.4,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000487',
    },
    firstName: 'Kalvin',
    lastName: 'Emburey',
    attendance: 12,
    average: 1.7,
    group: 'B',
    course: 'Finance',
    grades: [
      {
        subject: 'Administrative Officer',
        average: 3.7,
      },
      {
        subject: 'Professor',
        average: 2.1,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000488',
    },
    firstName: 'Rivkah',
    lastName: 'Robison',
    attendance: 4,
    average: 2.4,
    group: 'C',
    course: 'Capital Goods',
    grades: [
      {
        subject: 'Professor',
        average: 4.6,
      },
      {
        subject: 'Compensation Analyst',
        average: 3.6,
      },
      {
        subject: 'Cost Accountant',
        average: 3.2,
      },
      {
        subject: 'GIS Technical Architect',
        average: 3.5,
      },
      {
        subject: 'Account Executive',
        average: 1.1,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000489',
    },
    firstName: 'Ally',
    lastName: 'Leidecker',
    attendance: 26,
    average: 2.2,
    group: 'D',
    course: 'Health Care',
    grades: [
      {
        subject: 'Statistician I',
        average: 1.6,
      },
      {
        subject: 'Mechanical Systems Engineer',
        average: 2.3,
      },
      {
        subject: 'Cost Accountant',
        average: 4.6,
      },
      {
        subject: 'Media Manager IV',
        average: 2.4,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00048a',
    },
    firstName: 'Ricky',
    lastName: 'Flockhart',
    attendance: 80,
    average: 3.9,
    group: 'A',
    course: 'n/a',
    grades: [
      {
        subject: 'Dental Hygienist',
        average: 2.9,
      },
      {
        subject: 'Senior Quality Engineer',
        average: 2.1,
      },
      {
        subject: 'Marketing Manager',
        average: 4.6,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00048b',
    },
    firstName: 'Sisile',
    lastName: 'Kleinhandler',
    attendance: 79,
    average: 4.5,
    group: 'B',
    course: 'n/a',
    grades: [
      {
        subject: 'Cost Accountant',
        average: 4.6,
      },
      {
        subject: 'VP Marketing',
        average: 4.4,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00048c',
    },
    firstName: 'Nissie',
    lastName: 'Kelson',
    attendance: 59,
    average: 5,
    group: 'C',
    course: 'Capital Goods',
    grades: [
      {
        subject: 'Data Coordiator',
        average: 3.4,
      },
      {
        subject: 'Senior Cost Accountant',
        average: 2.5,
      },
      {
        subject: 'Social Worker',
        average: 3.7,
      },
      {
        subject: 'Web Designer IV',
        average: 1.8,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00048d',
    },
    firstName: 'Maxie',
    lastName: 'Edmondson',
    attendance: 19,
    average: 4,
    group: 'D',
    course: 'n/a',
    grades: [
      {
        subject: 'Chemical Engineer',
        average: 1.1,
      },
      {
        subject: 'Biostatistician III',
        average: 3.7,
      },
      {
        subject: 'VP Quality Control',
        average: 4.9,
      },
      {
        subject: 'Financial Analyst',
        average: 2.1,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00048e',
    },
    firstName: 'Maurise',
    lastName: 'Duckitt',
    attendance: 95,
    average: 4.5,
    group: 'A',
    course: 'Finance',
    grades: [
      {
        subject: 'Senior Editor',
        average: 1.2,
      },
      {
        subject: 'Statistician IV',
        average: 2.5,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c00048f',
    },
    firstName: 'Randi',
    lastName: 'Caws',
    attendance: 49,
    average: 3.2,
    group: 'B',
    course: 'Health Care',
    grades: [
      {
        subject: 'Account Coordinator',
        average: 2.1,
      },
      {
        subject: 'Technical Writer',
        average: 4.8,
      },
      {
        subject: 'Chemical Engineer',
        average: 4.4,
      },
      {
        subject: 'Chief Design Engineer',
        average: 3.2,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000490',
    },
    firstName: 'Jany',
    lastName: 'Sunman',
    attendance: 98,
    average: 1.3,
    group: 'C',
    course: 'Capital Goods',
    grades: [
      {
        subject: 'Human Resources Manager',
        average: 3.9,
      },
      {
        subject: 'Analyst Programmer',
        average: 1.4,
      },
      {
        subject: 'Marketing Manager',
        average: 4.6,
      },
    ],
  },
  {
    id: {
      $oid: '622ed8bafc13ae4d4c000491',
    },
    firstName: 'Phillie',
    lastName: 'Lowson',
    attendance: 12,
    average: 3.3,
    group: 'D',
    course: 'Technology',
    grades: [
      {
        subject: 'Geologist II',
        average: 1.9,
      },
      {
        subject: 'Clinical Specialist',
        average: 3.3,
      },
      {
        subject: 'Administrative Officer',
        average: 3.1,
      },
      {
        subject: 'Marketing Assistant',
        average: 2.9,
      },
    ],
  },
];

export default data;
