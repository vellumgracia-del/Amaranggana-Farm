import { defineField, defineType } from 'sanity'

export const focusArea = defineType({
    name: 'focusArea',
    title: 'Fokus Kami (Card/List)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Judul',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi Pendek',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'iconName',
            title: 'Nama Icon (Lucide React)',
            description: 'Contoh: BookOpen, Cpu, Truck. Harus cocok dengan nama Icon Lucide.',
            type: 'string',
        }),
    ],
})
