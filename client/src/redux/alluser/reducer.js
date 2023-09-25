import UserTypes from "./constant";


const GET_ALL_USER_INTIAL_STATE={
    data: [],
    message: "",
    loading: false
}
export const getAllUsers = (state = GET_ALL_USER_INTIAL_STATE, action) => {
    console.log("action : ",action)
    switch (action.type) {
        
        case UserTypes.GET_USERS_LOADING:
            
            return {
                data: GET_ALL_USER_INTIAL_STATE.data,
                loading: true,
            };
        case UserTypes.GET_USERS_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };


        case UserTypes.GET_USERS_ERROR:
            return {
                data: [],
                loading: false,
                message: action?.payload,
            };
        default:
            return { ...state };

    }
};