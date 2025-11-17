import { defineField, defineType } from "sanity";

export const ProjectsType = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text", // use text for longer descriptions
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image", // for images stored in Sanity
      options: {
        hotspot: true, // allows cropping
      },
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }], // array of strings
    }),
    defineField({
      name: "url",
      title: "Project URL",
      type: "url",
    }),
  ],
});
