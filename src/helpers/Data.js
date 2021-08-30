export const colors = [
  { bg: "bg-red-light", text: "text-red-dark" },
  { bg: "bg-yellow-light", text: "text-yellow-dark" },
  { bg: "bg-green-light", text: "text-green-dark" },
  { bg: "bg-blue-light", text: "text-blue-dark" },
  { bg: "bg-indigo-light", text: "text-indigo-dark" },
  { bg: "bg-purple-light", text: "text-purple-dark" },
  { bg: "bg-pink-light", text: "text-pink-dark" },
];

export const scale = [
  ["0", "px", "0.5", "1", "1.5", "2", "2.5"],
  ["3", "3.5", "4", "5", "6", "7", "8"],
  ["9", "10", "11", "12", "14", "16", "20"],
  ["24", "28", "32", "36", "40", "44", "48"],
  ["52", "56", "60", "64", "72", "80", "96"],
];

export const modifiers = [
  { style: "default" },
  { style: "primary" },
  { style: "secondary" },
  { style: "success" },
  { style: "info" },
  { style: "warning" },
  { style: "danger" },
  { style: "help" },
];

export const menu = [
  { title: "Inicio", link: "#", active: true, submenu: [] },
  { title: "Política", link: "#", active: false, submenu: [] },
  {
    title: "Local",
    link: "#",
    active: false,
    submenu: [
      { title: "SubItem 1", link: "#", active: false },
      { title: "SubItem 2", link: "#", active: false },
    ],
  },
  { title: "Seguridad", link: "#", active: false, submenu: [] },
  { title: "Sociedad", link: "#", active: false, submenu: [] },
  { title: "Economía", link: "#", active: false, submenu: [] },
  { title: "Mundo", link: "#", active: false, submenu: [] },
  {
    title: "Deporte",
    link: "#",
    active: false,
    submenu: [
      { title: "SubItem 1", link: "#", active: false },
      { title: "SubItem 2", link: "#", active: false },
      { title: "SubItem 3", link: "#", active: false },
    ],
  },
  { title: "Cultura", link: "#", active: false, submenu: [] },
  { title: "Opinión", link: "#", active: false, submenu: [] },
];
