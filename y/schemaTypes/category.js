import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: rule=> rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Category description',
      validation: rule=> rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the category'
    }
  ],
})
