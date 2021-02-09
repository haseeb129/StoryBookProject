import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Page3 } from "./Page3";

export default {
  title: "Example/Page3",
  component: Page3,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Page3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
