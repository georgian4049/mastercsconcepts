import { GET_CONTENT } from "../actions/types";

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

    default:
      return state;
  }
}
