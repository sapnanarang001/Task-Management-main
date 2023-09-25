import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/alluser/action';

const AllUsers = () => {

    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const GetAllData = store?.getAllUsers?.data?.data;

useEffect(()=>{
    dispatch(getAllUsers())
},[])



    return (
        <div>
            <h3>AllUsers</h3>
            <form>
        <input type="text" placeholder='dsfd'/>
    </form>
    <table>
        <tbody>
        <tr>
            <th> project name</th>
            <th> client name</th>
            <th> project type</th>
            <th> project start date</th>
            <th> project end date</th>
            <th>Actions</th>
        </tr>
        {GetAllData?.map((item,index)=>
            <tr>
                <td>{item._id}</td>
                <td>{item.title}</td>
                <td></td>
                <td></td>
                <td></td>
                <td><i class="mdi mdi-eye m-0 p-0"></i></td>
                
            </tr>
            )}
        </tbody>
    </table>
        </div>
    );
};

export default AllUsers;
