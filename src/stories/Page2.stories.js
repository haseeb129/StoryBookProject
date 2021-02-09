import React from "react";

import { Page2 } from "./Page2";

export default {
  title: "Example/Page2",
  component: Page2,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Page2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
