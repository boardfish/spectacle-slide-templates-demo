// Import theme

const logoPrimaryMono = require("../assets/logo-primary-mono.svg");
const logoPrimaryColor = require("../assets/logo-primary-color.svg");

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faBuilding,
  faGem,
  faRunning,
  faPersonBooth,
  faUsersCog,
  faUserCheck,
  faHammer,
  faCreditCard,
  faServer,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faDocker,
  faGithub,
  faTwitter
} from "@fortawesome/fontawesome-free-brands";

library.add(
  faUsers,
  faBuilding,
  faGem,
  faReact,
  faDocker,
  faGithub,
  faRunning,
  faPersonBooth,
  faUsersCog,
  faCreditCard,
  faUserCheck,
  faServer,
  faTerminal,
  faTwitter,
  faHammer
);

const theme = (
  primary = "primary",
  secondary = "secondary",
  tertiary = tertiary
) => {
  return {
    images: {
      logoPrimaryMono: logoPrimaryMono,
      logoPrimaryColor: logoPrimaryColor
    },
    slideDefaults: {
      transition: ["fade"],
      bgColor: secondary,
      textColor: "primary"
    },
    logoSettings: {
      bgImage: logoPrimaryMono,
      bgSize: "100px",
      bgRepeat: "no-repeat",
      bgPosition: "3% 97%"
    },
    headingDefaults: {
      caps: true,
      textColor: primary,
      size: 6,
      margin: "0 0 15px 0"
    },
    themeConfig: {
      primary: "white",
      secondary: "#066e8a",
      tertiary: "black",
      quaternary: "#008080"
    },
    fontConfig: {
      primary: "Montserrat",
      secondary: "Helvetica"
    }
  };
};

export default theme;
