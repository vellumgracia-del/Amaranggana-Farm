import { defineField, defineType } from 'sanity'

export const heroBlock = defineType({
    name: 'heroBlock',
    title: 'Hero / Beranda Utama',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Judul Referensi Internal',
            description: 'Hanya untuk penamaan di Studio (misal: "Hero Utama")',
            type: 'string',
        }),
        defineField({
            name: 'headline',
            title: 'Headline Utama (Teks Besar)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subHeadline',
            title: 'Sub Headline (Paragraf Sedang)',
            type: 'text',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Gambar Background Parallax',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Penting untuk aksesibilitas dan SEO.',
                }
            ]
        }),
    ],
})
