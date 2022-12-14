export default {
    title: "Om KcSyd",
    name: "om-kcsyd",
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
            title: "Introduktion (SVE)",
            name: "intro_sve",
            type: "contentEditor",
            group: "sve"
        },
        {
            title: "Introduktion (ENG)",
            name: "intro_eng",
            type: "contentEditor",
            group: "eng"
        },
        {
            title: "Innehåll (SVE)",
            name: "content_sve",
            type: "contentEditor",
            group: "sve"
        },
        {
            title: "Innehåll (ENG)",
            name: "content_eng",
            type: "contentEditor",
            group: "eng"
        },
    ],
}