const path = require("path")

module.exports = {
  siteMetadata: {
    title: `abhinow.dev`,
    author: `Abhinav Gangurde <gangurde.a@northeastern.edu>`,
    coverImage: `/cover.png`,
    navigationString: `abhinow.dev | `,
    siteUrl: `https://abhinow1997.github.io`,
    description: `Data Engineer | AI Engineer | Software Engineer. Master's student at Northeastern University building data pipelines and AI solutions.`,
    social: {
      linkedin: `https://www.linkedin.com/in/abhinav-gangurde/`,
      github: `https://github.com/Abhinow1997`,
      instagram: `https://www.instagram.com/__abhi.now__/`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: path.join(__dirname, `content`, `blog`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abhinav Gangurde - Portfolio`,
        short_name: `Abhinav`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#10b981`,
        display: `minimal-ui`,
        icon: `src/images/square.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, `src/components`),
          "@utils": path.resolve(__dirname, `src/utils`),
        },
      },
    },
  ],
}