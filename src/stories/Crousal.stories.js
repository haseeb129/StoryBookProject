import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Crousal } from "./Crousal";

export default {
  title: "Example/Crousal",
  component: Crousal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Crousal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
