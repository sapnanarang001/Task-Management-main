import React from 'react';
import { Col, Spinner, Row } from 'react-bootstrap';
import { Audio } from 'react-loader-spinner';

const MainLoader = () => {
    return (
        <>
            <Row>
                <Col
                    lg={12}
                    className="d-flex my-5 justify-content-center text-center  align-items-center top-0 bottom-0 end-0 start-0">
                    {/* <div className="custom_Loader">
                        <Spinner animation="border" role="status">
                        </Spinner>
                        <span className="visually-hidden text-center">Loading...</span>
                    </div> */}
                    <Audio
                        height="100"
                        width="100"
                        color="#313a46"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="Audio-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
                </Col>
            </Row>
        </>
    );
};

export default MainLoader;
