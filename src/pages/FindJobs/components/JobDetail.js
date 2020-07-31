import React, { useEffect,  } from 'react';
import get from "lodash/get";
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { faClock, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

import { getCurrentJob } from "../../../redux/actionCreators/actionCreators";

const Wrapper = styled.div`
  background-color: rgba(237, 237, 237, 1);
  min-height: 100vh;
  padding: 2% 0 0 0;
  margin: 2% 0 0 0;
`;
const SubWrapper = styled.div`
  color: gray;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  grid-gap: 2%;
  box-shadow: 0 4px 2px -2px black;
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;
const PositionDescription = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Description = styled.span`
  font-size: 18px;
  color: gray;
`;
const Employment = styled.span`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Salary = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: lightgreen;
`;

const JobDetail = ({ job, getJob, id }) => {

  useEffect(() => {
    getJob(id);
  }, [id]);

  if (!id || !job) return <h1>Job Detail</h1>;

  return (
    <Wrapper>
      <Container>
        <Link to={"/find-jobs"}>Back</Link>
        <Title className={"pt-3"}>{job.title}</Title>
        <Title>{job.jobName}</Title>
        <SubWrapper>
          <div>
            <FontAwesomeIcon
              className="mt-2 mr-2"
              icon={faMapMarkedAlt}
              color="gray"
              size="1.5x"
            />
            {job.location} <br/>
          </div>
          <div>
            <FontAwesomeIcon
              className="mt-2 mr-2"
              icon={faClock}
              color="gray"
              size="1.5x"
            />
            Today
          </div>
          <Employment>{job.employment}</Employment>
          <Salary>$18 - 20$ an hour</Salary>
        </SubWrapper>
        <div>
          <PositionDescription>
            Position Overview: 17
          </PositionDescription> <br/>
          <PositionDescription>
            Position Description:
          </PositionDescription> <br/>
          <Description>
            {job.description}
          </Description>
        </div>
        <p><b>Required Skills:</b> {job.required}</p>
        <p className="mt-3"><b>Contacts:</b> {job.contacts}</p>
        <p><b>Certificates / Education:</b> {job.education}</p>
        <p><b>Compensation:</b> {job.salary}</p>
        <p><b>Address:</b> {job.address}</p>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state, { match }) => ({
  job: state.jobsReducer.job,
  id: get(match, ['params', 'id'], 0),
});

const mapDispatchToProps = (dispatch) => ({
  getJob: (data) => dispatch(getCurrentJob(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobDetail));