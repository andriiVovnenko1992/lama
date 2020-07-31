import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  cursor: pointer;
  padding: 1.5%;
  margin: 1%
`;

const Title = styled.p`
  color: darkblue;
  font-size: 22px;
  font-weight: bold;
`;

const JobName = styled.p`
  font-size: 20px;
`;

const Estimated = styled.p`
  color: lightgreen;
  font-size: 18px;
`;

const JobsList = ({ jobsList }) => {

  return (
    <>
      {jobsList.map(({ id, title, jobName, description, salary, location }) => {
          return (
            <Wrapper key={id}>
              <Title>
                <Link to={`/find-jobs/${id}`}>{title}</Link>
              </Title>
              <JobName>{jobName}, {location}</JobName>
              <p>{description.length > 200 ? `${description.substring(0, 200)}...` : description}</p>
              <Estimated>Estimated: {salary}</Estimated>
            </Wrapper>
          );
      })}
    </>
  );
};

export default JobsList;