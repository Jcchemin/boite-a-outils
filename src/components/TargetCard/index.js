import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors } from 'Style/colors';
import { ArrowRight } from 'Components/Icons';

const CardContainer = styled.li`
  position: relative;
  display: inline-flex;
  flex-flow: row wrap;
  flex-basis: 32%;
  height: 6.875rem;
  min-width: 20rem;
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  background-color: #FFFFFF;
  box-sizing: border-box;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.0625rem;

  :hover {
    opacity: .8;
  }

  @media (min-width: 30rem) {
    min-width: 25rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 1rem;
  font-weight: 600;
  height: 100%;
  color: ${colors.text};

    @media (min-width: 30rem) {
      padding-left: 2rem;
    }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #DFDFDF;
  min-width: 8.625rem;
  max-width: 8.625rem;
  height: 100%;

  a {
    color: ${colors.accent};
    font-weight: 500;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
`;

const Title = styled.h4`
  color: ${colors.primary};
  font-size: 1.25rem;
  line-height: 1.8125rem;

    @media (min-width: 30rem) {
      font-size: 1.5rem;
    }
`;

const IconContainer = styled.span`
  margin: 0.0625rem 0 0 .5rem;
`;

const LINK_TEXT = 'Se renseigner';

const TargetCard = ({title, link}) => (
    <CardContainer>
      <TitleContainer>
        <span>Vous êtes</span>
        <Title>{title}</Title>
      </TitleContainer>
      <LinkContainer>
        <Link to={link} data-title={LINK_TEXT}>
          {LINK_TEXT}
          <IconContainer>
            <ArrowRight/>
          </IconContainer>
        </Link>
      </LinkContainer>
    </CardContainer>
)

export default TargetCard;
