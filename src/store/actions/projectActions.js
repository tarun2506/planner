export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    //make asyn call to database
    const firestore = getFirestore();
    const user = getState().auth.user;
    const authorId = user.uid;
    const profile = getState().profile.profileInfo;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date(),
        authorId: authorId,
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
