export default {
  0: {
    id: 0,
    name: "ghost",
    authorized: [0, 1, 2, 3, 4],
    hasStep: false,
    stepMax: 0,
    landPage: "/confirm-email"
  },
  1: {
    id: 1,
    name: "employee",
    authorized: [1, 3, 4],
    hasStep: true,
    stepMax: 2,
    landPage: "/employee"
  },
  2: {
    id: 2,
    name: "provider",
    authorized: [2, 3, 4],
    hasStep: true,
    stepMax: 3,
    landPage: "/provider"
  },
  3: {
    id: 3,
    name: "company",
    authorized: [3, 4],
    hasStep: false,
    stepMax: 3,
    landPage: "/app/company"
  },
  4: {
    id: 4,
    name: "admin",
    authorized: [4],
    hasStep: false,
    stepMax: 3,
    landPage: "/app/admin"
  }
};
