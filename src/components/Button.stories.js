import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

// export const Primary = () => {
//   <Button variant="primary">Primary</Button>;
// };

// export const Success = () => {
//   <Button variant="success">Success</Button>;
// };

// export const Danger = () => {
//   <Button variant="danger">Danger</Button>;
// };
