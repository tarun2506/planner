const initialState = {
  profileError: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_LOADED":
      console.log("PROFILEEE IS LOADEDEEDED");
      return { ...state, profileError: null, profileInfo: action.res.data() };
    case "PROFILE_ERROR":
      return { ...state, profileError: action.err.message };
    default:
      return state;
  }
};

export default profileReducer;
