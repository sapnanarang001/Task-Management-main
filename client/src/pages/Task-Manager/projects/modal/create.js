import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Row, Col, Card, Button, Alert, CloseButton } from 'react-bootstrap';
import { addProject } from '../../../../redux/projects/action';
import ToastHandle from '../../../../constants/toaster/toaster';
import MainLoader from '../../../../constants/Loader/loader';
const Create = ({ modal, closeModal }) => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const errorhandel = store?.addProject;
    const loaderhandel = store?.addProject;
    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        let body = {
            projectName: data?.projectName,
            clientName: data?.clientName,
            projectAccess: data?.access,
            key: data?.key,
            startDate: data?.startDate,
            endDate: data?.endDate,
            CompilationDate: data?.expectedEndDate,
            projectType: data?.projecttype,
            technology: data?.technology,
            // projectIcon: data?.uploadicons[0],
        };
        console.log(data, 'bbb');
        dispatch(addProject(body));
    };
    useEffect(() => {
        if (errorhandel?.data?.status == 200) {
            ToastHandle('success', 'Successfully added');
            closeModal('render');
        } else if (errorhandel?.data?.status == 400) {
            ToastHandle('error', errorhandel?.data?.message);
        } else if (errorhandel?.data?.status == 500) {
            ToastHandle('error', errorhandel?.data?.message);
        }
    }, [errorhandel]);
    useEffect(() => {
        reset();
    }, [modal]);

    return (
        <>
            <Modal show={modal} onHide={closeModal} size="lg">
                <Row className="m-0 p-0">
                    <Col lg={12}>
                        <Row>
                            <Col lg={7} className="text-end">
                                <Modal.Title id="" className="mx-auto">
                                    Create Project
                                </Modal.Title>
                            </Col>
                            <Col lg={5} className="text-end pt-2">
                                <CloseButton onClick={closeModal} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal.Body className="py-0">
                    {loaderhandel?.loading ? (
                        <>
                            <MainLoader />
                        </>
                    ) : (
                        <Card className="p-3">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label>
                                                Project Name <span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Please Enter Project Name"
                                                {...register('projectName', { required: true })}
                                            />
                                            {errors.projectName?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>
                                                Client Name <span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Please Enter Client Name"
                                                {...register('clientName', { required: true })}
                                            />
                                            {errors.clientName?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label>
                                                Access <span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Select {...register('access', { required: true })}>
                                                <option>Choose an access level </option>
                                                <option value="0">Private</option>
                                                <option value="1">Limited</option>
                                                <option value="2">Open</option>
                                            </Form.Select>
                                            {errors.access?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>
                                                Key<span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                {...register('key', { required: true })}
                                                placeholder="Please Enter key"
                                            />
                                            {errors.key?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>
                                                Start Date<span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                {...register('startDate', { required: true })}
                                                placeholder="Please start Date "
                                            />
                                            {errors.startDate?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>
                                                End Date<span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                {...register('endDate', { required: true })}
                                                placeholder="Please end Date"
                                            />
                                            {errors.endDate?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>
                                                Expected End Date<span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                {...register('expectedEndDate', { required: true })}
                                                placeholder="Please Expected End Date "
                                            />
                                            {errors.expectedEndDate?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label>
                                                Type Of Project <span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Select {...register('projecttype', { required: true })}>
                                                <option>Choose an Project Type </option>
                                                <option value="T&M">T&M</option>
                                                <option value="Fixed">Fixed</option>
                                            </Form.Select>
                                            {errors.projecttype?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label>
                                                Select Your Technology <span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Select {...register('technology', { required: true })}>
                                                <option>Choose Technology</option>
                                                <option value="Web">Web</option>
                                                <option value="Mobile">Mobile</option>
                                            </Form.Select>
                                            {errors.technology?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label>
                                                Upload Icons <span className="text-danger">*</span>:
                                            </Form.Label>
                                            <Form.Control
                                                type="file"
                                                {...register('uploadicons', { required: false })}
                                            />
                                            {errors.uploadicons?.type === 'required' && (
                                                <span className="text-danger"> This feild is required *</span>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="text-start d-flex align-items-center justify-content-center">
                                        <Button
                                            variant="info"
                                            type="submit"
                                            className="btn btn-sm  text-white pt-1 pb-1 mt-3 web_button ">
                                            Add
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Create;
