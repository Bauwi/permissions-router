export default {
  0: {
    hasStep: false,
    name: "ghost",
    landPage: "/confirm-email"
  },
  1: {
    hasStep: true,
    name: "employee",
    stepMax: 2,
    landPage: "/employee"
  },
  2: {
    hasStep: true,
    name: "provider",
    stepMax: 3,
    landPage: "/provider"
  },
  3: {
    hasStep: false,
    stepMax: 3,
    name: "admin",
    landPage: "/employee"
  },
  4: {
    hasStep: false,
    name: "superadmin",
    stepMax: 3,
    landPage: "/employee"
  }
};
