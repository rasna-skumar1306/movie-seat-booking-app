export const screenSchema = {
  name: "screenSeating",
  title: "Screen",
  type: "document",
  fields: [
    {
      name: "rows",
      title: "No of rows",
      type: "number",
    },
    {
      name: "columns",
      title: "No of columns",
      type: "number",
    },
    {
      name: "seats",
      title: "seats",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "seat" }],
        },
      ],
    },
  ],
};
