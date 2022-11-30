export default {
    title: "Projekt",
    name: "projekt",
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
            title: 'Tidskategori',
            name: 'tidskategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Pågående projekt', value: 'pagaende-projekt' },
                    { title: 'Arkiv/dokumentation', value: 'arkiv-dokumentation' }
                ],
                layout: 'radio'
            },
            initialValue: 'pagaende-projekt',
            validation: Rule => Rule.required(),
            group: ["sve", "eng"]
        },
        {
            title: 'Kategori (SVE)',
            name: 'kategori_sve',
            type: 'string',
            description: "t.ex. Samtal",
            group: "sve"
        },
        {
            title: 'Kategori (ENG)',
            name: 'kategori_eng',
            type: 'string',
            description: "t.ex. Samtal",
            group: "eng"
        },
        {
            title: 'Layoutalternativ',
            name: 'layout',
            type: 'string',
            options: {
                list: [
                    { title: 'Bild + text', value: 'alt1' },
                    { title: 'Stor bild + bild + text', value: 'alt2' },
                    { title: 'Text + text', value: 'alt3' },
                ],
                layout: 'radio'
            },
            initialValue: 'alt1',
            validation: Rule => Rule.required(),
            group: ["sve", "eng"]
        },
        {
            title: "Huvudbild",
            name: "mainImage",
            type: "image",
            validation: Rule => Rule.required(),
            fields: [
                {
                    name: 'bildtext_sve',
                    type: 'string',
                    title: 'Bildtext (SVE)',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                },
                {
                    name: 'caption_eng',
                    type: 'string',
                    title: 'Bildtext (ENG)',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                },
            ],
            group: ["sve", "eng"]
        },
        {
            title: 'Bildspel',
            name: 'bildspel',
            type: 'array',
            of: [{
                title: "bild",
                name: "image",
                type: "image",
                fields: [
                    {
                        name: 'bildtext_sve',
                        type: 'string',
                        title: 'Bildtext (SVE)',
                        options: {
                            isHighlighted: true // <-- make this field easily accessible
                        }
                    },
                    {
                        name: 'caption_eng',
                        type: 'string',
                        title: 'Bildtext (ENG)',
                        options: {
                            isHighlighted: true // <-- make this field easily accessible
                        }
                    },
                ]
            }],
            hidden: ({ document }) => document?.layout == "alt3",
            group: ["sve", "eng"]
        },
        {
            title: "Rubriktext vänsterspalt (SVE)",
            name: "rubriktext_sve",
            type: "text",
            hidden: ({ document }) => document?.layout !== "alt3",
            group: "sve"
        },
        {
            title: "Rubriktext vänsterspalt (ENG)",
            name: "rubriktext_eng",
            type: "text",
            hidden: ({ document }) => document?.layout !== "alt3",
            group: "eng"
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
    ],
}