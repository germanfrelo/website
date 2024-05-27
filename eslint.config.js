const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
	{
		languageOptions: {
			sourceType: "commonjs",
			globals: {
				// Enable all predefined browser global variables
				...globals.browser,
			},
		},
	},
	// ESLint's predefined config that enables its recommended rules
	js.configs.recommended,
	{
		// Global ignores patterns
		ignores: [
			// Default ignore patterns: ["**/node_modules/", ".git/"]
			"_site/",
		],
	},
];
