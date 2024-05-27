import js from "@eslint/js";
import globals from "globals";

export default [
	{
		files: ["**/*.js"],
		languageOptions: {
			sourceType: "commonjs",
		},
	},
	{
		languageOptions: {
			// Enable all predefined browser global variables
			globals: globals.browser,
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
