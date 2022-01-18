module.exports = {
  apps : [{
	name: 'API-EJS',
	cwd: './api-ejs',
    script: 'server.js',
    watch: '.',
	error_file: "./.logs/error",
	env_development: {
		NODE_ENV: 'development',
	},
	env_production: {
		NODE_ENV: 'production',
	}
  }, {
	name: 'MY-APP',
	cwd: './my-app',
	script: 'npm start',
	watch: '.',
	error_file: './.logs/error',
	env_development: {
		NODE_ENV: 'development',
	},
	env_production: {
		NODE_ENV: 'production',
	},
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
