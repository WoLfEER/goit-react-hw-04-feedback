import React from 'react';
import { SectionWrap, Title } from './Section.module';

import PropTypes from 'prop-types';

export const Section = ({ title = '', children }) => {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      <div>{children}</div>
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
