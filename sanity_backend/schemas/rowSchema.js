export const rowSchema = {
  name: "row",
  title: "Row",
  type: "document",
  fields: [
    {
      name: "rowName",
      title: "Row Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "screen",
      title: "Screen",
      type: "reference",
      to: [{ type: "screenSeating" }],
    },
  ],
};
