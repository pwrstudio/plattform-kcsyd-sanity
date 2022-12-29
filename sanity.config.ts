import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas'
import deskStructure from './deskStructure'
import { HelloWorldAction } from './actions'

const specialPages = ['om-kcsyd', 'splash', 'hemsidebild', 'information-kontakt']

export default defineConfig({
    name: 'default',
    title: 'plattform-kcsyd',

    projectId: '1oasromd',
    dataset: 'production',

    plugins: [deskTool({
        structure: deskStructure
    }), visionTool()],

    schema: {
        types: schemas,
    },
})
