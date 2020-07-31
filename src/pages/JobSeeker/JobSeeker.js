import React from 'react';
import { Container } from "react-bootstrap";

import SearchJob from "./components/SearchJob";

const JobSeeker = () => {

  return (
    <>
      <Container>
        <SearchJob />
      </Container>
    </>
  );
};

export default JobSeeker;