import { groq } from 'next-sanity'
import { client } from './lib/client'

// --- Types ---
export interface SanityHeroBlock {
    title?: string
    headline: string
    subHeadline?: string
    backgroundImage?: any
}

export interface SanityProduct {
    _id: string
    name: string
    identifier: string
    category: string
    description?: string
    price?: string
    image?: any
}

export interface SanityFocusArea {
    _id: string
    title: string
    description: string
    iconName?: string
}

// --- Queries ---

// Mendapatkan Hero Block pertama (karena biasanya kita hanya butuh 1 Hero Utama)
export async function getHeroBlock(): Promise<SanityHeroBlock | null> {
    const query = groq`*[_type == "heroBlock"][0]`
    return client.fetch(query)
}

// Mendapatkan semua produk
export async function getProducts(): Promise<SanityProduct[]> {
    const query = groq`*[_type == "product"] | order(_createdAt asc)`
    return client.fetch(query)
}

// Mendapatkan area fokus (List 3 Kartu Fokus Utama)
export async function getFocusAreas(): Promise<SanityFocusArea[]> {
    const query = groq`*[_type == "focusArea"] | order(_createdAt asc) [0...3]`
    return client.fetch(query)
}
