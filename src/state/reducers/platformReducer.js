import { PLATFORM, MULTIPLE_VALUES } from "../actions/types";

const initialState = {
  courseArea: "",
  courseSubArea: "",
};

export default function platformReducer(state = initialState, action) {
  switch (action.type) {
    case PLATFORM.COURSE_AREA:
      return {
        ...state,
        courseArea: action.payload,
      };
    case PLATFORM.COURSE_SUB_AREA:
      return {
        ...state,
        courseSubArea: action.payload,
      };
    case PLATFORM.SET_COURSE_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    case MULTIPLE_VALUES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
