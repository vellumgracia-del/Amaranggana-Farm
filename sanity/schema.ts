import { type SchemaTypeDefinition } from 'sanity'

import { heroBlock } from './schemaTypes/heroBlock'
import { product } from './schemaTypes/product'
import { focusArea } from './schemaTypes/focusArea'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [heroBlock, product, focusArea],
}
