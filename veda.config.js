module.exports = {
  /**
   * Glob path for the datasets.
   */
  datasets: "./datasets/*.data.mdx",

  /**
   * Glob path for the stories.
   */
  stories: "./stories/*.stories.mdx",

  // App component and content overrides.
  // See docs/CONFIGURATION.md for more information.
  pageOverrides: {
    // Content for the about page.
    // Type: Content override
    aboutContent: "./overrides/about.mdx",
    // Content for the home page.
    // Type: Content override
    homeContent: './overrides/home/index.mdx',

    // Component for the home hero banner.
    homeHero: "./overrides/components/home-hero/index.mdx",

    // Component for the header brand.
    headerBrand: "./overrides/components/header-brand/index.mdx",
    // Component for the footer.
    pageFooter: "./overrides/components/page-footer/index.mdx"
  },

  strings: {
    stories: {
      one: ' Data Story',
      other: 'Data Stories'
    }
  },

  theme: {
    color: {
      primary: "#082a64",
    },
    type: {
      base: {
        family: '"Inter", sans-serif'
      }
    },
    button: {
      type: {
        case: "uppercase",
        weight: 400
      }
    }
  },
};
