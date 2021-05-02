import { GET_CONTENT, CONTENT } from "../actions/types";

const initialState = {};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTENT: {
      const {
        courseArea,
        courseSubArea,
        materialCategory,
        data,
      } = action.payload;
      if (state[courseArea]) {
        if (state[courseArea][courseSubArea]) {
          if (state[courseArea][courseSubArea][materialCategory]) {
            return {
              ...state,
              [courseArea]: {
                ...state[courseArea],
                [courseSubArea]: {
                  ...state[courseArea][courseSubArea],
                  [materialCategory]: data,
                },
              },
            };
          } else {
            return {
              ...state,
              [courseArea]: {
                ...state[courseArea],
                [courseSubArea]: {
                  ...state[courseArea][courseSubArea],
                  [materialCategory]: data,
                },
              },
            };
          }
        } else {
          return {
            ...state,
            [courseArea]: {
              ...state[courseArea],
              [courseSubArea]: { [materialCategory]: data },
            },
          };
        }
      } else {
        return {
          ...state,
          [courseArea]: { [courseSubArea]: { [materialCategory]: data } },
        };
      }
    }
    case CONTENT["GET_ALL"]: {
      const contents = action.payload;
      const theory = contents?.filter(
        (x) => x["materialCategory"] === "theory"
      );
      const blogs = contents?.filter((x) => x["materialCategory"] === "blogs");
      return {
        ...state,
        theory: theory,
        blogs: blogs,
      };
    }

    default:
      return state;
  }
}
