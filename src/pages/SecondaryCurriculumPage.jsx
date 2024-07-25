import ArrayList from "../component/ArrayList";

const listItems = [
    { title: "Secondary (Grades 6-10):", items: ["English", "Mathematics", "Science (Physics, Chemistry, Biology)", " Social Studies", " Computer Science", "Physical Education", "Art"] },
]

export default function SecondaryCurriculumPage() {
    return (
        <div id="secondarypage" className="padding">
            <h1>Secondary Curriculum</h1>
            <ArrayList listItems={listItems} />
        </div>
    )
}
