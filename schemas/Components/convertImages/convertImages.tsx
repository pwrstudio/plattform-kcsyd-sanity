import { useFormValue } from 'sanity'
import { Stack, Button, Card, Text } from '@sanity/ui'

export const ConvertImagesInput = () => {

    const IMAGE_SERVER = "https://converter.kcsyd-dev.com"

    const document = {
        id: useFormValue([`_id`]),
        type: useFormValue([`_type`])
    }

    let working = false;

    const hitServer = () => {
        console.log(document.id + ' ' + document.type);
        working = true;

        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        let raw = JSON.stringify(document)

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        }

        fetch(IMAGE_SERVER, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return <Stack padding={0} space={[3, 3, 4, 5]}>
        <Card >
            <Button
                onClick={hitServer}
                fontSize={[2, 2, 3]}
                padding={[3, 3, 4]}
                text="Konvertera bilder"
                tone="primary"
            />
        </Card>
    </Stack>
}

