import {
    combineReducers
} from "redux";
import user from "./user";
import login from "./login";
var rootReducer=combineReducers({
    user,
    login,
});
export default rootReducer;