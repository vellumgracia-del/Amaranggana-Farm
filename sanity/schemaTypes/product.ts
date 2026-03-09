import { defineField, defineType } from 'sanity'

export const product = defineType({
    name: 'product',
    title: 'Produk (Sayur, Buah, Beras)',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nama Produk',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'identifier',
            title: 'ID Identifier',
            description: 'Digunakan untuk filter (misal: sayuran, buah, beras)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Kategori Label (Badge)',
            description: 'Label yang muncul di atas produk (misal: "Sayuran Organik")',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi Singkat',
            type: 'text',
        }),
        defineField({
            name: 'price',
            title: 'Harga (Optional)',
            description: 'Contoh: "Rp 15.000 / ikat"',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Foto Produk',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
