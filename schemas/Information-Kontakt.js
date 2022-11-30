export default {
    title: "Information/Kontakt",
    name: "information-kontakt",
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
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
        {
            title: "Praktisk information (SVE)",
            name: "info_sve",
            type: "limitedEditor",
            group: "sve"
        },
        {
            title: "Praktisk information (ENG)",
            name: "info_eng",
            type: "limitedEditor",
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