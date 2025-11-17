import { defineField, defineType } from "sanity";

export const SkillsType = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    // Front-End skills
    defineField({
      name: "frontEnd",
      title: "Front-End Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            {
              name: "skillicon",
              title: "Skill Icon",
              type: "string",
            },
            {
              name: "skillimage",
              title: "SkillImage",
              type: "string", // for images stored in Sanity
            },
          ],
        },
      ],
    }),

    // Back-End skills
    defineField({
      name: "backEnd",
      title: "Back-End Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            {
              name: "skillicon",
              title: "Skill Icon",
              type: "string",
            },
            {
              name: "skillimage",
              title: "SkillImage",
              type: "string", // for images stored in Sanity
            },
          ],
        },
      ],
    }),

    // Tools
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            {
              name: "skillicon",
              title: "Skill icon",
              type: "string",
            },
            {
              name: "skillimage",
              title: "SkillImage",
              type: "string", // for images stored in Sanity
            },
          ],
        },
      ],
    }),
  ],
});
