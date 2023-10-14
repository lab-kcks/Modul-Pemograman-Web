/** @type {import('payload/types').CollectionConfig} */
const Blog = {
  slug : "blog",
  access : {
    read : () => true,
    update : () => true,
    delete : () => true,
    create : () => true
  },
  fields : [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
            pickerAppearance: 'dayOnly',
            displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'writer',
      type: 'relationship',
      required: true,
      relationTo: 'author',
      filterOptions: ({ relationTo, siblingData }) => {
        return {
          division : { equals : 'content writer' }
        }
      }
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
  ]
}

export default Blog
