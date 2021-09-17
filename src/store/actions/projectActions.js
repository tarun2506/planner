export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make asyn call to database;
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
