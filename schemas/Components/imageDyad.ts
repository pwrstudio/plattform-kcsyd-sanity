export default {
    type: 'object',
    title: 'Bild',
    name: 'imageDyad',
    fields: [
        {
            title: "Bild (original)",
            name: "bild",
            type: "image",
            fields: [
                {
                    title: 'Bildtext (SVE)',
                    name: 'bildtext_sve',
                    type: 'string',
                },
                {
                    title: 'Bildtext (ENG)',
                    name: 'bildtext_eng',
                    type: 'string',
                },
            ],
        },
        {
            title: "Bild (dither)",
            name: "dither",
            // readOnly: true,
            type: "image",
        },
    ],
    preview: {
        select: {
            title: 'bildtext_sve',
            original: 'bild',
            dither: 'dither'
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