const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/img/");
  eleventyConfig.addPassthroughCopy("src/javascript/");

  // Filters
  eleventyConfig.addCollection('people', collection => {
    return [...collection.getFilteredByGlob('./src/people/*.md')];
  });
  eleventyConfig.addCollection('featuredEvents', collection => {
    return [...collection.getFilteredByGlob('./src/events/*.md')];
  });


  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
 
     // other config likely here
   });

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
