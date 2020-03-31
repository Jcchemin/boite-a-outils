import React from 'react';
import { Global } from "@emotion/core";
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import { globalStyles } from 'Style/global';

import SEO from 'Components/SEO';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { H1, P } from 'Components/HTML';

// create components, here or somewhere else, with emotion styled
const Container = styled.div`
  display: grid;
  height: 100vh;
  h1 {
    text-align: center;
  }
`;

// pageContext is injected by the mdx plugin
const Layout = ({children, pageContext}) => {
  const { title } = pageContext.frontmatter;

  return (
    <MDXProvider components={{
      h1: H1,
      p: P
    }}>
      <Global styles={globalStyles} />
      <SEO title={title} />
      <Container>
        <Header/>
        {children}
        <Footer/>
      </Container>
    </MDXProvider>
  );
}

export default Layout;
