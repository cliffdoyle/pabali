export default {
    name: "laptops",
    title: "Laptops",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "brand",
        title: "Brand",
        type: "reference",
        to: [{ type: "brands" }],
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "stock",
        title: "Stock",
        type: "number",
      },
    ],
  };
  