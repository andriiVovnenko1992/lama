import React from 'react';

const FormWrap = ({ title, children }) => (
  <div className="col-lg-4 col-10 offset-1 offset-lg-4 mt-5">
    { title && (<p className="h2 text-center">{title}</p>) }
    {children}
  </div>
);

export default FormWrap;
