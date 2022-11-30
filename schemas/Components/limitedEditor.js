export default {
    type: 'object',
    name: 'limitedEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Content editor (simple)',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        {
                            title: 'Normal', value: 'normal'
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
            ]
        },
    ]
}