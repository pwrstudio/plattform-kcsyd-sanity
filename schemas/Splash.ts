import { ConvertImagesInput } from "./Components/convertImages/convertImages"

export default {
    title: "Splash",
    name: "splash",
    type: "document",
    fields: [
        {
            title: "Splashbild",
            name: "mainImage",
            type: "imageDyad",
        },
        {
            title: "Konvertera bilder",
            name: "fetch",
            type: "string",
            components: {
                input: ConvertImagesInput
            }
        },
    ],
}