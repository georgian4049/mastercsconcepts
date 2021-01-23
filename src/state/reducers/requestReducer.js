import { REQUEST } from "../actions/types";

const initialState = {
  newRequestData: {
    requestType: "",
    accountName: "",
    businessCCCostCenter: "",
    projectName: "",
    AWSService: "",
    resourceType: "",
    quantity: "",
    budget: "",
    justification: "",
    usageDuration: "",
    projectSponsor: "",
  },
  requestOptions: [],
};

export default function requestReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST.NEW_REUQEST_DRAFT:
      return {
        ...state,
        newRequestData: {
          requestType: action.payload.requestType,
          accountName: action.payload.accountName,
          businessCCCostCenter: action.payload.businessCCCostCenter,
          projectName: action.payload.projectName,
          AWSService: action.payload.AWSService,
          resourceType: action.payload.resourceType,
          quantity: action.payload.quantity,
          budget: action.payload.budget,
          justification: action.payload.justification,
          usageDuration: action.payload.usageDuration,
          projectSponsor: action.payload.projectSponsor,
        },
      };
    case REQUEST.GET_OPTIONS: {
      let items = {};
      action.payload.map(
        (item) =>
          (items = {
            ...items,
            [item.optionName]: item.items,
          })
      );
      return {
        ...state,
        requestOptions: items,
      };
    }
    case REQUEST.CLEAR_REQUEST_DRAFT: {
      let stateVal = {};
      Object.keys(state.newRequestData).forEach((x) => (stateVal[x] = ""));
      return {
        ...state,
        newRequestData: stateVal,
      };
    }
    default:
      return state;
  }
}
