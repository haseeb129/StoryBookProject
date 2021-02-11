import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Crousal2 } from "./Crousal2";

export default {
  title: "Example/Crousal2",
  component: Crousal2,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Crousal2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
