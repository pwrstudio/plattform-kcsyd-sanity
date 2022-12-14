import { ConvertImagesInput } from "./Components/convertImages/convertImages"

export default {
    title: "Hemsidebild",
    name: "hemsidebild",
    type: "document",
    fields: [
        {
            title: "Hemsidebild",
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