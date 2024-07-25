import StringList from "../component/StringList";

const listItems = [{ title: "Teaching Methodologies", text: "We use a blend of traditional and modern teaching techniques to cater to different learning styles." },
{ title: "Educational Resources", text: "Digital classrooms, interactive learning modules, and access to online educational platforms." }
]

export default function MethodologPage() {
    return (
        <div id="methodologpage" className="padding">
            <h1>Academic</h1>
            <StringList listItems={listItems} />
        </div>
    )
}
