import { wrapper } from "@keystatic/core/content-components";
import { fields } from "@keystatic/core";

export const Alert = wrapper({
  label: "Alert box",
  schema: {
    type: fields.select({
      label: "Alert type",
      options: [
        { label: "Info", value: "info" },
        { label: "Warning", value: "warning" },
        { label: "Failure", value: "failure" },
        { label: "Success", value: "success" },
      ],
      defaultValue: "info",
    }),
  },
});
