import { defineField, defineType } from "sanity";

export const CvType = defineType({
  name: "cv",
  title: "Cv",
  type: "document",
  fieldsets: [
    { name: "media", title: "Media" }, // group for images & files
    { name: "text", title: "Text Content" }, // group for text fields
  ],
  fields: [
    // ---------- Media fields ----------
    defineField({
      name: "cvFile",
      title: "Cv File (pdf)",
      type: "file",
      fieldset: "media",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "ProfileImage",
      title: "Profile Image",
      type: "image",
      fieldset: "media",
      options: { hotspot: true },
    }),

    // ---------- Text fields ----------
    defineField({
      name: "myDescription",
      title: "My Description",
      type: "text",
      fieldset: "text",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      description: "Write here your skills",
      fieldset: "text",
    }),
    defineField({
      name: "contacts",
      title: "Contact Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
      fieldset: "text",
    }),
  ],
});
