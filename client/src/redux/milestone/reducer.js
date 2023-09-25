import MileStoneType from "./constant";


const GET_ALL_MILESTONE_INTIAL_STATE={
    data: [],
    message: "",
    loading: false
}
const GET_MILESTONE_INTIAL_STATE={
    data: [],
    message: "",
    loading: false
}
const DELETE_MILESTONE_INTIAL_STATE={
    data: [],
    message: "",
    loading: false
}
const  ADD_ALL_MILESTONE__INTIAL_STATE={
    data:[],
    message:"",
    loading:false
}
export const getAllMileStones = (state = GET_ALL_MILESTONE_INTIAL_STATE, action) => {
    switch (action.type) {
        case MileStoneType.GET_ALL_MILESTONES_LOADING:
            return {
                data: GET_ALL_MILESTONE_INTIAL_STATE.data,
                loading: true,
            };
        case MileStoneType.GET_ALL_MILESTONES_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };


        case MileStoneType.GET_ALL_MILESTONES_ERROR:
            return {
                data: [],
                loading: false,
                message: action?.payload,
            };
        default:
            return { ...state };

    }
};
export const deleteMileStone = (state = DELETE_MILESTONE_INTIAL_STATE, action) => {
    switch (action.type) {
        case MileStoneType.DELETE_MILE_STONE_LOADING:
            return {
                data: DELETE_MILESTONE_INTIAL_STATE.data,
                loading: true,
            };
        case MileStoneType.DELETE_MILE_STONE_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };
        case MileStoneType.DELETE_MILE_STONE_RESET:
            return {
                data: DELETE_MILESTONE_INTIAL_STATE.data,
                loading: false
            }

        case MileStoneType.DELETE_MILE_STONE_ERROR:
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
export const getMileStone = (state = GET_MILESTONE_INTIAL_STATE, action) => {
    switch (action.type) {
        case MileStoneType.GET_ALL_MILESTONE_BY_ID_LOADING:
            return {
                data: GET_MILESTONE_INTIAL_STATE.data,
                loading: true,
            };
        case MileStoneType.GET_ALL_MILESTONE_BY_ID_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };


        case MileStoneType.GET_ALL_MILESTONE_BY_ID_ERROR:
            return {
                data: [],
                loading: false,
                message: action?.payload,
            };
        default:
            return { ...state };
        }
    };

  export const addMillstone=(state=ADD_ALL_MILESTONE__INTIAL_STATE,action) =>{
    switch (action.type) {
        case MileStoneType.ADD_ALL_MILESTONE_LOADING:
            return {
                data: ADD_ALL_MILESTONE__INTIAL_STATE.data,
                loading: true,
            };
        case MileStoneType.ADD_ALL_MILESTONE_SUCCESS:
            return {
                data: action?.payload,
                loading: false,
            };

        case MileStoneType.ADD_ALL_MILESTONE_ERROR:
            return {
                data: [],
                loading: false,
                message: action?.payload,
            };
        default:
            return { ...state };
    }
  
};