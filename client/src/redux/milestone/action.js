import MileStoneType from "./constant";

type AuthAction = { type: string, payload: {} | string };

export const addMillstone=(data):AuthAction=>({
    type:MileStoneType.ADD_ALL_MILESTONE,
    payload:data

})
export const getallMileStones = (data): AuthAction => ({
    type: MileStoneType.GET_ALL_MILESTONES,
    payload: data
})


export const getMileStoneById = (data): AuthAction => ({
    type: MileStoneType.GET_ALL_MILESTONE_BY_ID,
    payload: data
})

export const deleteMileStone = (data): AuthAction => ({
    type: MileStoneType.DELETE_MILE_STONE,
    payload: data
})
