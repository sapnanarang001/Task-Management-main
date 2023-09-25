import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListGroup, Container, Row, Col, Table, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './milstone.css';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Create from '../milestone/modal/create';
import { getProjectsById } from '../../../../redux/projects/action';
import {getallMileStones,getMileStoneById} from '../../../../redux/milestone/action'



const Milestone = () => {
    const { id } = useParams();
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const [openModel, setOpenModel] = useState(false);
    const  GetDataById  =store?.getProjectById?.data?.project;
    const GetMileStone = store?.getAllMileStones?.data?.data;
    console.log("amam",GetMileStone)
        const closeModal = () => {
        setOpenModel(false);
    };
   
   
    useEffect(() => {
       dispatch(getProjectsById(id))
       dispatch(getallMileStones(id))
    }, [])
    
    return (
        <>
            {/* <h1>{id}</h1> */}
            <Container className="my-3">
                <Row>
                    <Col className="text-end" lg={12}>
                        <Button
                            onClick={() => {
                                setOpenModel(true);
                            }}
                            // onClick={handleCreate}

                            // onClick={(e)=>{handleCreate(e,"ghjkl")}}

                            variant="info"
                            type="submit"
                            className="btn fs-5  text-white p-1   web_button">
                            Add
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        <Row>
                            <Col className="text-center" lg={12}>
                                <h4> Project</h4>
                            </Col>

   <ListGroup as="ol" numbered style={{ marginLeft: '20px', position: 'sticky' }}>
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="">
                                            <b>Project Name : </b>
                                            <i>{ GetDataById ?.projectName}</i>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="">
                                            <b>Client Name : </b>
                                           <i>
                                            {GetDataById?.clientName}
                                           </i>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="">
                                            <b>Project Type : </b>
                                           <i>{GetDataById?.projectType
}</i>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="">
                                            <b>Project Start Date : </b>
                                            <i>
                                            {moment(GetDataById ?.startDate).format('L')}</i>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="">
                                            <b>Project End Date : </b>
                                            <i>{moment(GetDataById ?.endDate).format('L')}</i>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="">
                                            <b>Project Category : </b>
                                            <i>{ GetDataById ?.projectCategory}</i>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="">
                                            <b>Project Description : </b>
                                            <i>{GetDataById?.projectDesc
}</i>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="">
                                            <b>Project Slug : </b>
                                            <i>{GetDataById?.projectSlug}</i>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
    
                         
                        </Row>
                    </Col>

                    <Col className="mx-auto" lg={7}>
                        <Row>
                            <Col className="text-center" lg={12}>
                                {' '}
                                <h4>Milestones</h4>
                            </Col>
                            <Col className="" lg={12}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <Table>
                                                <thead className="text-center btom_Line_hide">
                                                    <tr>
                                                        <th>Start Date</th>
                                                        <th>End Date</th>
                                                    </tr>
                                                </thead>
                                            </Table>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Table>
                                                <thead className=" btom_Line_hide">
                                                    <tr>
                                                        <th> MileStone Name</th>
                                                        <th> Description</th>
                                                        <th> Start Date</th>
                                                        <th> End Date</th>
                                                    </tr>
                                                </thead>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Create modal={openModel} closeModal={closeModal} />
            </Container>
        </>
    );
};

export default Milestone;
