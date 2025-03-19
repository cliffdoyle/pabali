export default {
    name: "reviews",
    title: "Reviews",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "review",
        title: "Review",
        type: "text",
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
        validation: (Rule) => Rule.min(1).max(5),
      },
    ],
  };
  