export const profile = (userId) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(userId)
      .get()
      .then((res) => {
        console.log("GOT THE RESPONSE BACK", res.data());
        dispatch({ type: "PROFILE_LOADED", res });
      })
      .catch((err) => {
        dispatch({ type: "PROFILE_ERROR", err });
      });
  };
};
