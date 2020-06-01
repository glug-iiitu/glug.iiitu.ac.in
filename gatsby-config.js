module.exports = {
  siteMetadata: {
    bio: 'World is open source!',
    title: 'GLUG IIITU',
    author: 'Shivam Tripathi',
    description: 'Official site for GNU/Linux user group IIIT Una',
    siteUrl: '',
    social: {
      twitter: 'https://twitter.com/iiituna',
      github: 'https://github.com/iiituna',
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
  ],
};
