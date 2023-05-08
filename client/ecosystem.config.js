module.exports = {
    apps: [
      {
        name: 'next',
        cwd: '.', // Specify the path to your Strapi project
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  