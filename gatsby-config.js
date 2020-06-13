module.exports = {
  siteMetadata: {
    bio: 'World is open source!',
    title: 'GLUG IIITU',
    author: 'Shivam Tripathi',
    description: 'Official site for GNU/Linux user group IIIT Una',
    siteUrl: 'https://glug.iiitu.ac.in',
    social: {
      github: 'https://github.com/glug-iiitu',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extenstions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1440,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
      },
    },
  ],
};
