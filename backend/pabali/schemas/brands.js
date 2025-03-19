export default {
    name: "brands",
    title: "Brands",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "logo",
        title: "Logo",
        type: "image",
        options: { hotspot: true },
      },
    ],
  };
  