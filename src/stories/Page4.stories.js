import React from "react";

import { Page4 } from "./Page4";

export default {
  title: "Example/Page4",
  component: Page4,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Page4 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
