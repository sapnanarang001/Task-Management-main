// @flow
import { combineReducers } from 'redux';

import Auth from './auth/reducers';
import Layout from './layout/reducers';
import { addProject, getProject, updateProject, deleteProject, getProjectById } from './projects/reducers';
import { getAllMileStones, deleteMileStone, getMileStone } from './milestone/reducer';
import { getAllUsers } from './alluser/reducer';
import { addSprint ,getAllSprints ,deleteSprint,getSingleSprint } from './sprint/reducres';
export default (combineReducers({
    Auth,
    Layout,
    addProject,
    getProject,
    updateProject,
    deleteProject,
    getProjectById,
    getAllMileStones,
    deleteMileStone,
    getMileStone,
    getAllUsers,
    addSprint,
    getAllSprints,deleteSprint,getSingleSprint
}): any);
