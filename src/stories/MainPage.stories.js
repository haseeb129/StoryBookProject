import React from "react";

import { MainPage } from "./MainPage";

export default {
  title: "Example/MainPage",
  component: MainPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MainPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
