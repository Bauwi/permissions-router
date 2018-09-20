export default [
  {
    id: 0,
    name: "ghost",
    authorized: [0, 1, 2, 3, 4],
    redirect: "/"
  },
  {
    id: 1,
    name: "employee",
    authorized: [1, 3, 4],
    redirect: "/employee"
  },
  {
    id: 2,
    name: "provider",
    authorized: [2, 3, 4],
    redirect: "/"
  },
  {
    id: 3,
    name: "admin",
    authorized: [3, 4],
    redirect: "/employee"
  },
  {
    id: 4,
    name: "superadmin",
    authorized: [4],
    redirect: "/employee"
  }
];
