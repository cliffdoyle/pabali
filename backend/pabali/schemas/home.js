export default {
    name: "home",
    title: "Home",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "bannerImage",
        title: "Banner Image",
        type: "image",
        options: { hotspot: true },
      },
    ],
  };
  