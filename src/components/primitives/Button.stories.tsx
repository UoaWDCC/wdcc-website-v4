import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
    title: "Components/Primitives/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primaryBlue: Story = {
    args: {
        children: "Click me",
        variant: { style: "primary", color: "blue" },
    },
};

export const secondaryLight: Story = {
    args: {
        children: "Click me",
        variant: { style: "secondary", color: "light" },
    },
};
