#!/usr/bin/env node

// Create a Browsersync instance
const bs = require("browser-sync").create();
const splitGuide = require("split-guide/dist").default

// Listen to change events on HTML and reload
bs.watch("*.html").on("change", bs.reload);

// Provide a callback to capture ALL events to CSS
// files - then filter for 'change' and reload all
// css files on the page.
bs.watch("exercises-final/**/*.css", function (event, file) {
    if (event === "change") {
        bs.reload("*.css");
    }
});

// Watch for changes in templates
bs.watch("templates/**/*", function (event, file) {
    if (event === "change") {
        splitGuide({
            templatesDir: "./templates",
            exercisesDir: "./exercises",
            exercisesFinalDir: "./exercises-final",
        })
        bs.reload()
    }
});

// Now init the Browsersync server
bs.init({
    server: "./exercises-final"
});
