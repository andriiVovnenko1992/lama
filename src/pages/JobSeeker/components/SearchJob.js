import React, { useState } from 'react';
import logo from "../../../asset/logo.jpg";
import {Button, Col, Row} from "react-bootstrap";

import Input from "../../../components/Input";

const SearchJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  return (
    <Row className="mt-5 text-center">
      <Col className="mb-3" lg={12} md={12} sm={12}>
        <img src={logo} alt="logo" width={320} height={220}/>
      </Col>
      <Col lg={5} md={5} sm={12} className="mt-3">
        <label className="float-left">Job title, keywords or company</label>
        <Input
          size="lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Col>
      <Col lg={5} md={4} sm={12} className="p-0 mt-3" >
        <div>
          <label className="float-left">Location</label>
        </div>
        <Input
          size="lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Col>
      <Col lg={2} md={3} sm={12} className="pt-4">
        <Button className="mt-4 btn btn-lg btn-success">
          Find Job
        </Button>
      </Col>
    </Row>
  );
};

export default SearchJob;