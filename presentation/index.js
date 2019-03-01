// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Fill,
  Layout
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif")
};

// Require CSS
require("normalize.css");

import getTheme from "./theme";
import standardSlide from "./StandardSlide";

const theme = getTheme();
const StandardSlideTemplate = standardSlide();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={createTheme(theme.themeConfig, theme.fontConfig)}
      >
        <StandardSlideTemplate>
          <Heading>
            <FontAwesomeIcon icon={["fab", "react"]} /> This is a standard slide
          </Heading>
          <Text>
            <FontAwesomeIcon icon="users" /> made using a template
          </Text>
          <Layout>
            <Fill>
              <Heading textColor="primary">Foo</Heading>
            </Fill>
            <Fill>
              <Heading textColor="primary">Bar</Heading>
            </Fill>
          </Layout>
        </StandardSlideTemplate>
      </Deck>
    );
  }
}
