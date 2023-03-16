import React from "react";
import Row from "./Row";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
const ScreensTable = ({ screens, load, isButton }) => {
  return (
    <>
      <h1>Screens table</h1>
      {!screens[0] ? (
        "loading"
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {screens.map((screen, i) => (
              <Row screen={screen} key={i}></Row>
            ))}
          </tbody>
        </Table>
      )}
      <Button onClick={load} disabled={!isButton}>More screens</Button>
    </>
  );
};
export default ScreensTable;
