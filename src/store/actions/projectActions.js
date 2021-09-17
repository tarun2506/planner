export const createProject = (project) => {
  return (dispatch, getState) => {
    //make asyn call to database;
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
