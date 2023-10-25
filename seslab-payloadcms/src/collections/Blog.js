// const payload = require('payload')

import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Blog = {
  slug: "blog",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "findByID") {
          // crate click artivity
          payload.create({
            collection: "activity",
            data: {
              blog: args.result.id,
              timestamp: new Date(),
            },
          });
        }
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      admin: {
        date: {
          displayFormat: "d MMM yyy",
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "writer",
      type: "relationship",
      required: true,
      relationTo: "author",
      filterOptions: ({ relationTo, siblingData }) => {
        return {
          division: { equals: "content writer" },
        };
      },
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
  ],
};

export default Blog;
