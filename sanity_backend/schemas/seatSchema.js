export const seatSchema = {
  name: "seat",
  title: "Seat",
  type: "document",
  fields: [
    {
      name: "seatNumber",
      title: "Seat Number",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "screen",
      title: "Screen",
      type: "reference",
      to: [{ type: "screenSeating" }],
    },
  ],
};
