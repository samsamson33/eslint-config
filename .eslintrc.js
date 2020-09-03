// This is the file to lint this project, not one of the project exports

module.exports = {
	env: {
		es2020: true,
		node: true
	},
	// Using the config to lint the config :D
	extends: ".",
	parserOptions: { ecmaVersion: 12 }
};
