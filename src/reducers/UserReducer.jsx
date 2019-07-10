import { USER_LOGIN } from "../actions/ActionsConstants";

const INITIAL_STATE = {
  user: {
    name: "manojkumar",
    password: "docvalult",
    documents: [
      {
        doc_name: "Passport",
        doc_code: "p123",
        doc_file: "",
        number: "",
        nationality: "",
        dob: "",
        sex: "",
        placeofBirth: "",
        doi: "",
        doe: ""
      },
      {
        doc_name: "Drivers Licence",
        doc_code: "dl123",
        doc_file: ""
      },
      {
        doc_name: "Misc",
        doc_code: "misc123",
        doc_file: ""
      }
    ]
  },
  loginState: false
};

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN:
      console.log(action.payload);

      return {
        ...state,
        loginState: action.payload
      };
    default:
      return state;
  }
}
