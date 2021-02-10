import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Page5 } from "./Page5";

export default {
  title: "Example/Page5",
  component: Page5,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Page5 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
