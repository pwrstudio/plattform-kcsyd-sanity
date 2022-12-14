import { normal, title, small } from './renderers'

export default {
    type: 'object',
    title: 'Content editor',
    name: 'contentEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Content editor',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        {
                            title: 'Normal', value: 'normal', blockEditor: {
                                render: normal
                            }
                        },
                        {
                            title: 'Small', value: 'small', blockEditor: {
                                render: small
                            }
                        },
                        {
                            title: 'H2', value: 'h2', blockEditor: {
                                render: title
                            }
                        },
                    ],
                    lists: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'strong'
                            },
                            {
                                title: 'Emphasis',
                                value: 'em'
                            },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string'
                                    }
                                ]
                            },
                        ]
                    },
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'bildtext_sve',
                            type: 'string',
                            title: 'Bildtext (SVE)',
                        },
                        {
                            name: 'caption_eng',
                            type: 'string',
                            title: 'Bildtext (ENG)',
                        },
                    ]
                },
            ]
        },
    ]
}