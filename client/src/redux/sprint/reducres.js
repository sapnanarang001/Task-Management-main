import SprintTypes from "./constant";

const ADD_SPRINT_INITIAL_STATE = {
    data: [],
    message: "",
    loading: false
}
const GET_ALL_SPRINT_INITIAL_STATE = {
    data: [],
    message: "",
    loading: false
}
const DELETE_SPRINT_INITIAL_STATE = {
    data: [],
    message: "",
    loading: false
}
const GET_SINGLE_SPRINT_INITIAL_STATE = {
    data: [],
    message: "",
    loading: false
}
export const addSprint = (state = ADD_SPRINT_INITIAL_STATE, action) => {
    switch (action.type) {
        case SprintTypes.ADD_SPRINT_LOADING:
            return {
                data: ADD_SPRINT_INITIAL_STATE.data,
                loading: true,
            };
        case SprintTypes.ADD_SPRINT_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };
        case SprintTypes.ADD_SPRINT_RESET:
            return {
                data: ADD_SPRINT_INITIAL_STATE.data,
                loading: false,
            };
        case SprintTypes.ADD_SPRINT_ERROR:
            return {
                data: [],
                loading: false,
                message: action?.payload,
            };
        default:
            return { ...state };

    }
};
export const getAllSprints = (state = GET_ALL_SPRINT_INITIAL_STATE, action) => {
    switch (action.type) {
        case SprintTypes.GET_ALL_SPRINT_LOADING:
            return {
                data: GET_ALL_SPRINT_INITIAL_STATE.data,
                loading: true,
            };
        case SprintTypes.GET_ALL_SPRINT_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };


        case SprintTypes.GET_ALL_SPRINT_ERROR:
            return {
                data: [],
                loading: false,
                message: action?.payload,
            };
        default:
            return { ...state };

    }
};
export const deleteSprint = (state = DELETE_SPRINT_INITIAL_STATE, action) => {
    switch (action.type) {
        case SprintTypes.DELETE_SPRINT_LOADING:
            return {
                data: DELETE_SPRINT_INITIAL_STATE.data,
                loading: true,
            };
        case SprintTypes.DELETE_SPRINT_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };
        case SprintTypes.DELETE_SPRINT_RESET:
            return {
                data: DELETE_SPRINT_INITIAL_STATE.data,
                loading: false
            }

        case SprintTypes.DELETE_SPRINT_ERROR:
            return {
                data: [],
                status: 403,
                loading: false,
                message: action?.payload,
            };
        default:
            return { ...state };

    }
};
export const getSingleSprint = (state = GET_SINGLE_SPRINT_INITIAL_STATE, action) => {
    switch (action.type) {
        case SprintTypes.GET_SPRINT_BY_ID_LOADING:
            return {
                data: GET_SINGLE_SPRINT_INITIAL_STATE.data,
                loading: true,
            };
        case SprintTypes.GET_SPRINT_BY_ID_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };


        case SprintTypes.GET_SPRINT_BY_ID_ERROR:
            return {
                data: [],
                loading: false,
                message: action?.payload,
            };
        default:
            return { ...state };

    }
};