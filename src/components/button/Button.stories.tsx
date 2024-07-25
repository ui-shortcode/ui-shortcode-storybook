import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  args: {
    size: "md",
    type: "primary",
    disabled: false,
    ariaPressed: false,
    ariaExpanded: false,
    as: "button",
    href: "",
    iconClass: "",
    iconPosition: "left",
    iconOnly: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  label: "Contained Button",
  ariaLabel: "Contained Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Outlined Button",
  ariaLabel: "Outlined Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  label: "Text Button",
  ariaLabel: "Text Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "contained",
  size: "sm",
  label: "Small Button",
  ariaLabel: "Small Button",
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "contained",
  size: "md",
  label: "Medium Button",
  ariaLabel: "Medium Button",
};

export const Large = Template.bind({});
Large.args = {
  variant: "contained",
  size: "lg",
  label: "Large Button",
  ariaLabel: "Large Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "contained",
  label: "Disabled Button",
  disabled: true,
  ariaLabel: "Disabled Button",
};

export const LinkAsButton = Template.bind({});
LinkAsButton.args = {
  as: "a",
  href: "#",
  label: "Link as Button",
  ariaLabel: "Link as Button",
};

export const DisabledLinkAsButton = Template.bind({});
DisabledLinkAsButton.args = {
  as: "a",
  href: "#",
  label: "Disabled Link as Button",
  ariaLabel: "Disabled Link as Button",
  disabled: true,
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  variant: "contained",
  label: "Button with Icon",
  ariaLabel: "Button with Icon",
  iconClass: "bx bx-universal-access",
  iconPosition: "left",
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  variant: "contained",
  label: "Button with Icon",
  ariaLabel: "Button with Icon",
  iconClass: "bx bx-universal-access",
  iconPosition: "right",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  variant: "contained",
  ariaLabel: "Icon Only Button",
  iconClass: "bx bx-universal-access",
  iconOnly: true,
};
