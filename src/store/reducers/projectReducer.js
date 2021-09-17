const initState = {
  projects: [
    { id: 1, title: "Mad cuz Bad", content: "kakakaka", date: Date.now() },
    { id: 2, title: "Hoes mad", content: "agagaga", date: Date.now() },
    {
      id: 3,
      title: "Definitely not a random",
      content: "xaxaxaxa",
      date: Date.now(),
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
    default:
      return state;
  }
  return state;
};

export default projectReducer;
