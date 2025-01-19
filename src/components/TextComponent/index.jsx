import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const TextComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default TextComponent;

TextComponent.propTypes = {
  children: P.node.isRequired,
};
