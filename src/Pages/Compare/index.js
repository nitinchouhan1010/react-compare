import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Alert } from "reactstrap";
import CompareProduct from '../../compare.json';

const Compare = () => {
    const [objToshows, setObjToShow] = useState([]);

    const addToCompareList = (value, index) => {
        let temp = objToshows;
        temp.push(value);
        setObjToShow([...temp])
        console.log(objToshows)

    }
    function closeTodo(e, index) {
        let temp = objToshows;
        temp.splice(index, 1);
        setObjToShow([...temp]);
        e.preventDefault();
    }

    return (
        <div>
            <Container>
                <h5 className="p-3 mt-3 mb-4 bg-white border-left-secondary double-shadow">Compare</h5>
                <Row>
                    {CompareProduct.map((value, index) =>
                        <Col sm={3} key={index}>
                            <div className="border p-3 text-center bg-white">
                                <img src={value.img} className="img-fluid" alt="cherry" />
                                <h5 className="text-center mb-3">{value.name}</h5>
                                <h6 className="text-center mb-3">{value.price}</h6>
                                <Button type="button" onClick={e => addToCompareList(value, index)} >compare</Button>
                                {/* <Button type="button" outline className="ml-2" onClick={e => RemoveList(value, index)} >Remove</Button> */}
                            </div>
                        </Col>
                    )}
                </Row>
                <div className="mt-5">
                    <Table bordered className="compare-table bg-white">
                        <tbody>
                            <tr>
                                <th>Product ID</th>
                                {objToshows.map((value, index) =>
                                    <td>{value.id}</td>
                                )}
                            </tr>
                            <tr>
                                <th>Name</th>
                                {objToshows.map((value, index) =>
                                    <td>{value.name}</td>
                                )}
                            </tr>
                            <tr>
                                <th>Item Number</th>
                                {objToshows.map((value, index) =>
                                    <td>{value.itemname}</td>
                                )}
                            </tr>
                            <tr>
                                <th>Price</th>
                                {objToshows.map((value, index) =>
                                    <td>{value.price}</td>
                                )}
                            </tr>
                            <tr>
                                <th></th>
                                {objToshows.map((value, index) =>
                                    <td><Alert color="primary" key={index} className="px-2 py-1" onClick={e => closeTodo(e, index)} style={{ cursor: "pointer", margin: "0", display: "inline-block" }}><span style={{ cursor: "pointer", float: "right" }}>Remove</span></Alert></td>
                                )}
                            </tr>
                        </tbody>

                    </Table>

                </div>
            </Container>
        </div>
    );
}

export default Compare; 