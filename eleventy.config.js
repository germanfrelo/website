export default function (eleventyConfig) {
	// Set directories to pass through to the output folder "_site"
	eleventyConfig.addPassthroughCopy("_redirects");
	eleventyConfig.addPassthroughCopy("manifest.webmanifest");
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy({ "src/favicon": "/" });

	return {
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
			data: "_data",
		},
	};
}
