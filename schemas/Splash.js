export default {
    title: "Splash",
    name: "splash",
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fields: [
        {
            title: "Splashbild",
            name: "mainImage",
            type: "image",
            validation: Rule => Rule.required(),
        },
    ],
}