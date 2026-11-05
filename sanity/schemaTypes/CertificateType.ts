import { defineField, defineType } from "sanity";

export const CertificateType = defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({ name: "issuer", title: "Issuer", type: "string" }),
    defineField({ name: "issueDate", title: "Issue date", type: "date" }),
    defineField({
      name: "credentialUrl",
      title: "Credential URL",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Certificate image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
