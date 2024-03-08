import { combineReducers } from "redux";

const countReducer = (count = 0, action) => {
    switch (action.type) {
        case "INC":
            return count + 1;
        case "DEC":
            return count - 1;
        default:
            return count;
    }
};

const valueReducer = (value = 0, action) => {
    switch (action.type) {
        case "INC":
            return value + 1;
        case "DEC":
            return value - 1;
        default:
            return value;
    }
};

const allReducers = combineReducers({
    count: countReducer,
    value: valueReducer
});

export default allReducers;
