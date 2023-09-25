import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import UserTypes from './constant';
import { getAllUserApi } from './api';



    function* getAllUsersFunction({ payload }) {
        try {
            console.log("sgrgre",payload)
            yield put({
                type: UserTypes.GET_USERS_LOADING,
                payload: {}
            })
            const response = yield call(getAllUserApi, { payload });
            console.log("amit",response)
            if (response.data.status) {
                yield put({
                    type: UserTypes.GET_USERS_SUCCESS,
                    payload: { ...response.data },
                });
                // yield put({
                //     type: MileStoneType.GET_ALL_MILESTONES_RESET,
                //     payload: {},
                // });
            }
            else {
                yield put({
                    type: UserTypes.GET_USERS_ERROR,
                    payload: { ...response.data }
                });
            }
    
        } catch (error) {
            yield put({
                type: UserTypes.GET_USERS_ERROR,
                payload: { message: error?.message }
            });
    
        }
    }
   
    
    export function* getAllUsersSaga(): any {
        
        yield takeEvery(UserTypes.GET_USERS, getAllUsersFunction);
    }
  
    function* AllUsersSaga(): any {
        yield all([
            fork(getAllUsersSaga),           
   
        ])
    }
    
    export default AllUsersSaga;