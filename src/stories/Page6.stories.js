import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Page6 } from "./Page6";

export default {
  title: "Example/Page6",
  component: Page6,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Page6 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
