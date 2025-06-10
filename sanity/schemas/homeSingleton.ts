import { defineField, defineType } from "sanity";

export const homeSingleton = defineType({
  name: "home",
  type: "document",
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: "heading",
      description: "Main heading for the home page",
      type: "string",
      validation: (rule) => rule
        .required()
        .max(100)
        .error("Heading must be max 100 characters long"),
    }),
    defineField({
      name: "intro",
      description: "Intro for the home page",
      type: "text",
      validation: (rule) => rule
        .required()
        .max(250)
        .error("Intro must be max 250 characters long"),
    }),
    defineField({
      name: "workstatus",
      description: "Current work status for the home page",
      type: "string",
      validation: (rule) => rule
        .required()
        .max(60)
        .error("Must be max 60 characters long"),
    }),
    defineField({
      name: "heroImage",
      description: "Main image for the home page",
      type: "image",
      fields: [
        { 
          name: 'alt',
          type: 'string',
          validation: Rule => Rule.required()
        },
        { 
          name: 'caption',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    }),
  ],
});