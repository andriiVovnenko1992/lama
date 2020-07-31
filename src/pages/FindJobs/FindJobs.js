import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import get from 'lodash/get';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { faSearch, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../../components/Input';
import Select from '../../components/Select';
import JobsList from './components/JobsList';
// import JobDetail from './components/JobDetail';

import { getAllJobs } from '../../redux/actionCreators/actionCreators';
// import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: rgba(237, 237, 237, 1);
  margin: 0;
  padding: 0;
`;

// const CustomContainer = styled.div`
//   max-width: 1460px;
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   padding-right: 15px;
//   padding-left: 15px;
// `;

const FindJobs = ({ jobsList, getJobs, id }) => {
  const [title, setTitle] = useState('');
  const [locations, setLocation] = useState('');

  useEffect(() => {
    getJobs();
  }, []);

  const styles = {
    search: {
      float: 'left',
      position: 'relative',
      top: '-48px',
      marginLeft: '2%',
      zIndex: '2'
    },
    locations: {
      float: 'left',
      position: 'relative',
      top: '-47px',
      marginLeft: '3%',
      zIndex: '2'
    }
  };

  return (
    <>
      <Container>
        <Row className="text-center">
          <Col lg={5} md={5} sm={12}>
            <Input size="lg" value={title} onChange={(e) => setTitle(e.target.value)} />
            <FontAwesomeIcon
              style={styles.search}
              className="mt-2 mr-2"
              icon={faSearch}
              color="green"
              size="2x"
            />
          </Col>
          <Col lg={5} md={4} sm={12} className="p-0" >
            <Input size="lg" value={locations} onChange={(e) => setLocation(e.target.value)} />
            <FontAwesomeIcon
              style={styles.locations}
              className="mt-2 mr-2"
              icon={faMapMarkedAlt}
              color="green"
              size="2x"
            />
          </Col>
          <Col lg={2} md={3} sm={12} className="p-0">
            <Button className="btn btn-lg btn-success">
              Find Jobs
            </Button>
          </Col>
          <Col lg={2} md={3} sm={12}>
            <Select title={"Within 50 km"} />
          </Col>
          <Col lg={2} md={3} sm={12}>
            <Select title={"Job Type"} />
          </Col>
          <Col lg={2} md={3} sm={12}>
            <Select title={"Company"} />
          </Col>
        </Row>
      </Container>
      <Wrapper>
        <Container>
          <Row>
            <Col className="mt-1 mb-5" lg={12} md={12} sm={12}>
              <JobsList jobsList={jobsList} />
            </Col>
            {/*<Col className="pl-0 mt-1" lg={7} md={7} sm={12}>*/}
            {/*  <JobDetail id={id} />*/}
            {/*</Col>*/}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    jobsList: state.jobsReducer.jobs,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => dispatch(getAllJobs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindJobs);