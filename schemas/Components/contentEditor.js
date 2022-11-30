import React from 'react'

const normalRender = props => (
    <span style={{ fontFamily: 'serif' }}>{props.children}</span>
)

const titleRender = props => (
    <span style={{ fontFamily: 'serif', fontSize: '1.4rem' }}>{props.children}</span>
)

const smallRender = props => (
    <span style={{ fontSize: '0.8rem', fontFamily: 'sans-serif', fontWeight: 'bold', }}>{props.children}</span>
)

export default {
    type: 'object',
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
                                render: normalRender
                            }
                        },
                        {
                            title: 'Small', value: 'small', blockEditor: {
                                render: smallRender
                            }
                        },
                        {
                            title: 'H2', value: 'h2', blockEditor: {
                                render: titleRender
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
            ]
        },
    ]
}