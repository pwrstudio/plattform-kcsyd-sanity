import React from 'react'

export function HelloWorldAction({ onComplete }) {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    return {
        label: 'Show confirm',
        onHandle: () => {
            setDialogOpen(true)
        },
        dialog: dialogOpen && {
            type: 'confirm',
            onCancel: onComplete,
            onConfirm: () => {
                alert('You confirmed!')
                onComplete()
            },
            message: 'Please confirm!'
        }
    }
}