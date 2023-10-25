/** @type {import('payload/types').CollectionConfig} */
const Activity = {
  slug : "activity",
  access : {
    read : () => true,
    create : () => true,
  },
  fields : [
    {
      name: 'blog',
      type: 'relationship',
      required: true,
      relationTo: 'blog',
    },
    {
      name: "timestamp",
      type: "date",
      required : true
    },
  ]
}

export default Activity
