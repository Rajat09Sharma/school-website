import ArrayList from "../component/ArrayList";

const listItems = [
    { title: "Extracurricular Activities", items: ["Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"] },
    { title: "Clubs and Societies", items: ["Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"] }
]


export default function StudentLifePage() {
    return (
        <div id="studentlifepage" className="padding">
            <h1>Life at Springdale</h1>
            <ArrayList listItems={listItems} />
        </div>
    )
}
