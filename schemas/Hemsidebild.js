export default {
    title: "Hemsidebild",
    name: "hemsidebild",
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
        {
            title: "Bild",
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
            ]
        },
    ],
}