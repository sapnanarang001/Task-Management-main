import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import MileStoneType from './constant';
import { deleteMileStoneApi, getAllMileStonesApi, getMileStoneApi,addMillstoneApi } from './api';

function* addMillstoneFunction({ payload }) {
    try {
        yield put({
            type: MileStoneType.ADD_ALL_MILESTONE_LOADING,
            payload: {}
        })
        const response = yield call(addMillstoneApi, { payload });
        if (response.data.status) {
            yield put({
                type: MileStoneType.ADD_ALL_MILESTONE_SUCCESS,
                payload: { ...response.data },
            });
            yield put({
                type: MileStoneType.ADD_ALL_MILESTONE,
                payload: {},
            });
        }
        else {
            yield put({
                type: MileStoneType.ADD_ALL_MILESTONE_ERROR,
                payload: { ...response.data }
            });
        }

    } catch (error) {
        yield put({
            type: MileStoneType.ADD_ALL_MILESTONE_ERROR,
            payload: { message: error?.message }
        });
        yield put({
            type: MileStoneType.ADD_ALL_MILESTONE_RESET,
            payload: {},
        });

    }
};

    function* getAllMileStonesFunction({ payload }) {
        try {
            yield put({
                type: MileStoneType.GET_ALL_MILESTONES_LOADING,
                payload: {}
            })
            const response = yield call(getAllMileStonesApi, { payload });
            console.log("amit",response)
            if (response.data.status) {
                yield put({
                    type: MileStoneType.GET_ALL_MILESTONES_SUCCESS,
                    payload: { ...response.data },
                });
                // yield put({
                //     type: MileStoneType.GET_ALL_MILESTONES_RESET,
                //     payload: {},
                // });
            }
            else {
                yield put({
                    type: MileStoneType.GET_ALL_MILESTONES_ERROR,
                    payload: { ...response.data }
                });
            }
    
        } catch (error) {
            yield put({
                type: MileStoneType.GET_ALL_MILESTONES_ERROR,
                payload: { message: error?.message }
            });
    
        }
    }
    function* MileStonedeleteFunction({ payload }) {
        try {
            yield put({
                type: MileStoneType.DELETE_MILE_STONE_LOADING,
                payload: {}
            })
            const response = yield call(deleteMileStoneApi, { payload });
            if (response.data.status) {
                yield put({
                    type: MileStoneType.DELETE_MILE_STONE_SUCCESS,
                    payload: { ...response.data },
                });
                yield put({
                    type: MileStoneType.DELETE_MILE_STONE_RESET,
                    payload: {},
                });
            }
            else {
                yield put({
                    type: MileStoneType.DELETE_MILE_STONE_ERROR,
                    payload: { ...response.data }
                });
            }
    
        } catch (error) {
            yield put({
                type: MileStoneType.DELETE_MILE_STONE_ERROR,
                payload: { message: error?.message }
            });
            yield put({
                type: MileStoneType.DELETE_MILE_STONE_RESET,
                payload: {},
            });
    
        }
    }
    function* getMileStoneFunction({ payload }) {
        try {
            yield put({
                type: MileStoneType.GET_ALL_MILESTONE_BY_ID_LOADING,
                payload: {}
            })
            const response = yield call(getMileStoneApi, { payload });
            console.log(response,"bbbvvv")
            if (response.data.status) {
                yield put({
                    type: MileStoneType.GET_ALL_MILESTONE_BY_ID_SUCCESS,
                    payload: { ...response.data },
                });
                // yield put({
                //     type: MileStoneType.GET_ALL_MILESTONE_BY_ID_RESET,
                //     payload: {},
                // });
            }
            else {
                yield put({
                    type: MileStoneType.GET_ALL_MILESTONE_BY_ID_ERROR,
                    payload: { ...response.data }
                });
            }
    
        } catch (error) {
            yield put({
                type: MileStoneType.GET_ALL_MILESTONE_BY_ID_ERROR,
                payload: { message: error?.message }
            });
    
        }
    }
    export function* addMileStoneSaga(): any {
        yield takeEvery(MileStoneType.ADD_ALL_MILESTONE, addMillstoneFunction);
    }
    export function* getAllMileStonesSaga(): any {
        yield takeEvery(MileStoneType.GET_ALL_MILESTONES, getAllMileStonesFunction);
    }
    export function* mileStoneDeleteSaga(): any {
        yield takeEvery(MileStoneType.DELETE_MILE_STONE, MileStonedeleteFunction);
    }
    export function* getMileStoneSaga(): any {
        yield takeEvery(MileStoneType.GET_ALL_MILESTONE_BY_ID, getMileStoneFunction);
    }
    function* AllMileStonesSaga(): any {
        yield all([
 
            fork(addMileStoneSaga),
            fork(getAllMileStonesSaga),
            fork(mileStoneDeleteSaga),
            fork(getMileStoneSaga),
   
        ])
    }
    
    export default AllMileStonesSaga;