import UserTypes from "./constant";
type AuthAction = { type: string, payload: {} | string };

export const getAllUsers = (data): AuthAction => ({
    type: UserTypes.GET_USERS,
    payload: data
})