/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

interface Props {}

export const HomePage = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Div></Div>
    </>
  );
});

const Div = styled.div``;
