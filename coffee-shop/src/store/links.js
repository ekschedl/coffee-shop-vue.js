const links = {
  state: {
    header: {
      id: 0,
      icon: "Logo.svg",
      link: "/",
    },
    footer: {
      id: 0,
      icon: "Logo_black.svg",
      link: "/",
    },
    other: [
      {
        id: 1,
        text: "Our Coffee",
        link: "/our-coffee",
      },
      {
        id: 2,
        text: "For your pleasure",
        link: "/goods",
      },
      {
        id: 3,
        text: "Contact us",
        link: "/contact",
      },
    ],
  },
  getters: {
    getHeaderlinks(state) {
      return {
        header: state.header,
        other: state.other,
      };
    },
    getFooterlinks(state) {
      return {
        footer: state.footer,
        other: state.other,
      };
    },
  },
};

export default links;
