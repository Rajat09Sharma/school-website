import ArrayList from "../component/ArrayList";

const listItems = [
    { title: "Presiden", items: ["Amy Parker", "Grade 12"] },
    { title: "Vice President", items: ["Rajiv Mehta", "Grade 11"] },
    { title: "Secretary", items: ["Lisa Wong", "Grade 10"] }
]



export default function StudentCouncilPage() {
    return (
        <div id="studentcouncilpage" className="padding">
            <h1>Student Council</h1>
            <ArrayList listItems={listItems} />

        </div>
    )
}
