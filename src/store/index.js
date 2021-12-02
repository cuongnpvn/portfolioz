import { createStore } from "vuex";

export default createStore({
  state: {
    portfolios: [
      {
        logo: require("@/assets/logo-ywmobile.png"),
        company: "YWmobile",
        role: "Front-end Developer Intern",
        desc: "I joined YWmobile company as an intern front-end developers.",
      },
      {
        logo: require("@/assets/logo-personal.png"),
        company: "Unkown",
        role: "Not yet...",
        desc: "Not yet...",
      },
      {
        logo: require("@/assets/logo-personal.png"),
        company: "Unkown",
        role: "Not yet...",
        desc: "Not yet...",
      },
    ],
    blogs: [
      {
        title: "Understand Dimensionality Reduction",
        desc: 'Some keypoint when I learn about Dimensionality Reduction from "Hands on Machine Learning with Scikit-Learn, Keras and Tensorflow" book.',
        category: "AI & ML",
        date: "November 5, 2021",
        read: "4 min read",
      },
      {
        title: "How to use the drag & drop in VueJS (simplest way)",
        desc: "Basic about drag & drop and how to apply it in VueJS project (demo with Todo app).",
        category: "VueJS",
        date: "October 23, 2021",
        read: "4 min read",
      },
      {
        title: "Different optimizers in Deep Learning",
        desc: "How each optimizer could affect out model and which optimizer should we use ?",
        category: "AI & ML",
        date: "October 11, 2021",
        read: "4 min read",
      },
      {
        title: "Typography 101",
        desc: "Learn about the basic of Typography, how to apply it in real project.",
        category: "Design",
        date: "October 4, 2021",
        read: "4 min read",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
