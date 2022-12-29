import { ConvertImagesInput } from "./Components/convertImages/convertImages"

export default {
    title: "Konstnär",
    name: "konstnar",
    type: "document",
    groups: [
        {
            name: 'eng',
            title: 'Engelska',
        },
        {
            name: 'sve',
            title: 'Svenska',
        },
        {
            name: 'img',
            title: 'Konvertera bilder',
        },
    ],
    fields: [
        {
            title: "Titel (SVE)",
            name: "title",
            type: "string",
            validation: Rule => Rule.required(),
            group: "sve"
        },
        {
            title: "Titel (ENG)",
            name: "title_eng",
            type: "string",
            validation: Rule => Rule.required(),
            group: "eng"
        },
        {
            title: 'Konstnärer',
            name: 'konstnarer',
            type: 'array',
            of: [{
                title: 'Namn',
                name: 'name',
                type: 'string',
            }],
            group: ["sve", "eng"]
        },
        {
            title: 'Tidskategori',
            name: 'tidskategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Kommande', value: 'kommande' },
                    { title: 'Tidigare', value: 'tidigare' }
                ],
                layout: 'radio'
            },
            initialValue: 'kommande',
            validation: Rule => Rule.required(),
            group: ["sve", "eng"]
        },
        {
            title: "Huvudbild",
            name: "mainImage",
            type: "imageDyad",
            validation: Rule => Rule.required(),
            group: ["sve", "eng"]
        },
        {
            title: "Innehåll (SVE)",
            name: "content_sve",
            type: "limitedEditor",
            group: "sve"
        },
        {
            title: "Innehåll (ENG)",
            name: "content_eng",
            type: "limitedEditor",
            group: "eng"
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200,
            },
            validation: (Rule) => Rule.required(),
            group: ["sve", "eng"]
        },
        {
            title: "Konvertera bilder",
            name: "fetch",
            type: "string",
            components: {
                input: ConvertImagesInput
            },
            group: ["img"]

        },
    ],
    preview: {
        select: {
            title: 'title',
            original: 'mainImage.bild',
            dither: 'mainImage.dither'
        },
        prepare(selection) {
            const { title, original, dither } = selection
            return {
                title: title,
                media: dither && dither.asset ? dither : original
            }
        }
    }
}