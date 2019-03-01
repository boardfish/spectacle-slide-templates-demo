import React, { Component } from "react";
import { Slide } from "spectacle";
import getTheme from "./theme";

const theme = getTheme();

export default () => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Slide
          {...theme.slideDefaults}
          {...theme.logoSettings}
          bgImage={theme.images.logoPrimaryColor}
          {...this.props}
          textColor="quaternary"
        >
          {React.Children.map(this.props.children, child => {
            switch (child.type.displayName) {
              case "Heading":
                return React.cloneElement(child, {
                  textColor: "secondary"
                });
              case "Text":
                return React.cloneElement(child, {
                  textColor: "quaternary"
                });
              default:
                return child;
            }
          })}
        </Slide>
      );
    }
  };
};
