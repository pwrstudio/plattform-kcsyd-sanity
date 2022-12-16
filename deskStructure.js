// ICONS
import {
    MdPerson,
    MdImage,
    MdWork,
    MdHome,
    MdMail,
    MdWater,
    MdList,
    MdMap
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("Plattform KcSyd")
        .items([
            S.listItem()
                .title("Hemsidebild")
                .icon(MdImage)
                .child(
                    S.editor()
                        .id("hemsidebild")
                        .title("Hemsidebild")
                        .schemaType("hemsidebild")
                        .documentId("hemsidebild")
                ),
            S.listItem()
                .title("Splash")
                .icon(MdWater)
                .child(
                    S.editor()
                        .id("splash")
                        .title("Splash")
                        .schemaType("splash")
                        .documentId("splash")
                ),
            S.listItem()
                .title("Miljöpolicy")
                .icon(MdMap)
                .child(
                    S.editor()
                        .id("miljopolicy")
                        .title("Miljöpolicy")
                        .schemaType("miljopolicy")
                        .documentId("miljopolicy")
                ),
            S.listItem()
                .title("Om KcSyd")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id("om-kcsyd")
                        .title("Om KcSyd")
                        .schemaType("om-kcsyd")
                        .documentId("om-kcsyd")
                ),
            S.listItem()
                .title("Projekt")
                .icon(MdWork)
                .child(
                    S.documentList()
                        .title("Projekt")
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "projekt" })
                ),
            S.listItem()
                .title("Konstnärer")
                .icon(MdPerson)
                .child(
                    S.documentList()
                        .title("Konstnärer")
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "konstnar" })
                ),
            S.listItem()
                .title("Information/Kontakt")
                .icon(MdMail)
                .child(
                    S.editor()
                        .id("information-kontakt")
                        .title("Information/Kontakt")
                        .schemaType("information-kontakt")
                        .documentId("information-kontakt")
                ),
            S.listItem()
                .title("Listor")
                .icon(MdList)
                .child(
                    S.editor()
                        .id("listor")
                        .title("Listor")
                        .schemaType("listor")
                        .documentId("listor")
                ),
        ])
