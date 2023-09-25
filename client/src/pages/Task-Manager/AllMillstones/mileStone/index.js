import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListGroup, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMileStoneById } from '../../../../redux/milestone/action';
import Create from './Sprint/Create';
import moment from 'moment';
import "../../projects/milestone/milstone.css";
import Accordion from 'react-bootstrap/Accordion';
const MileStone = () => {
    const { id } = useParams();
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const [data, setData] = useState();
    const [openModal, SetOpenModal] = useState(false);
    const successHandle = store?.getMileStone;
    const handleCreate = () => {
        SetOpenModal(true);
    };
    const CloseModal = () => {
        SetOpenModal(false);
    };
    useEffect(() => {
        dispatch(getMileStoneById(id));
    }, []);

    useEffect(() => {
        if (successHandle?.data?.status == 200) {
            setData(successHandle?.data?.data);
        }
    }, [successHandle]);
    console.log(data, 'fhgjklj');

    return (
        <>
            <Row>
                <Col className="text-end mt-2 " lg={12}>
                    <Button
                        onClick={handleCreate}
                        variant="info"
                        type="submit"
                        className="btn fs-5  text-white p-1   web_button">
                        Create Sprint
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Row>
                        <Col className="text-center" lg={12}>
                            <h4> MileStone</h4>
                        </Col>

                        <ListGroup as="ol" numbered style={{ marginLeft: '20px', position: 'sticky' }}>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="">
                                        <b> MileStone Title : </b>
                                        <i>{data?.title}</i>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="">
                                        <b>Description : </b>
                                        <i>{data?.description}</i>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="">
                                        <b>Start Date : </b>
                                        <i>{moment(data?.startDate).format('L')}</i>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="">
                                        <b>End Date : </b>
                                        <i>{moment(data?.completion_date).format('L')}</i>
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
                                <h4>Sprints</h4>
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
                                                        <th>SprintName</th>
                                                        <th>Sprint Description</th>
                                                        <th>Sprint Start Date</th>
                                                        <th>Sprint End Date</th>
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
            <Create modal={openModal} CloseModal={CloseModal} id={id} data={data}/>
        </>
    );
};

export default MileStone;
