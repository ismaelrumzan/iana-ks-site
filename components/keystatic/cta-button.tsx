import { block } from "@keystatic/core/content-components";
import { fields } from "@keystatic/core";

export const CTAButton = block({
  label: "CTA Button",
  schema: {
    text: fields.text({ label: "Button text" }),
    link: fields.text({ label: "Button link" }),
    icon: fields.select({
      label: "Button Icon",
      options: [
        { label: "Info", value: "info" },
        { label: "Apply", value: "apply" },
        { label: "Security", value: "security" },
      ],
      defaultValue: "info",
    }),
  },
  ContentView: (props) => <p>{props.value.text}</p>,
});
