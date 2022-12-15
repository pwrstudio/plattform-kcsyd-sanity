import { ConvertImagesInput } from "./Components/convertImages/convertImages"

export default {
    title: "Listor",
    name: "listor",
    type: "document",
    fields: [
        {
            title: 'Konstnärer (kommande)',
            description: 'Poster som inte läggs till här visas sist i listan.',
            name: 'konstnarerKommandeList',
            type: 'array',
            of: [{
                title: "Konstnär",
                name: "konstnar",
                type: "reference",
                to: [{ type: 'konstnar' }],
                options: {
                    disableNew: true,
                    filter: 'tidskategori == "kommande"'
                }
            }],
            validation: Rule => Rule.unique()
        },
        {
            title: 'Konstnärer (tidigare)',
            description: 'Poster som inte läggs till här visas sist i listan.',
            name: 'konstnarerTidigareList',
            type: 'array',
            of: [{
                title: "Konstnär",
                name: "konstnar",
                type: "reference",
                to: [{ type: 'konstnar' }],
                options: {
                    disableNew: true,
                    filter: 'tidskategori == "tidigare"'
                }
            }],
            validation: Rule => Rule.unique()
        },
        {
            title: 'Projekt (pågående)',
            description: 'Poster som inte läggs till här visas sist i listan.',
            name: 'pagaendeList',
            type: 'array',
            of: [{
                title: "Projekt",
                name: "projekt",
                type: "reference",
                to: [{ type: 'projekt' }],
                options: {
                    disableNew: true,
                    filter: 'tidskategori == "pagaende-projekt"'
                }
            }],
            validation: Rule => Rule.unique()
        },
        {
            title: 'Projekt (arkiv/dokumentation)',
            description: 'Poster som inte läggs till här visas sist i listan.',
            name: 'arkivDokumentationList',
            type: 'array',
            of: [{
                title: "Projekt",
                name: "projekt",
                type: "reference",
                to: [{ type: 'projekt' }],
                options: {
                    disableNew: true,
                    filter: 'tidskategori == "arkiv-dokumentation"'
                }
            }],
            validation: Rule => Rule.unique()
        },
    ]
}