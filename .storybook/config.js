import { configure } from "@storybook/react";

// automatically import all files ending in *.story.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
