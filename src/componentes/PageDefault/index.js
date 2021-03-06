import React, { Component } from "react";
import Menu from "../../componentes/Menu/menu.js";
import Footer from "../../componentes/Footer/Footer.js";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--primary);
  color: var(--white);
  flex: 4;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

export default class PageDefault extends Component {
  render() {
    return (
      <section>
        <Menu />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
