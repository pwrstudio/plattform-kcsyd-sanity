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
            media: 'bild'
        },
    }
}