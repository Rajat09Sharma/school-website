import ArrayList from "../component/ArrayList";

const listItems = [
    { title: "Primary (Grades 1-5):", items: ["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"] },
]

export default function PrimaryCurriculumPage() {
    return (
        <div id="primarypage" className="padding">
            <h1>Primary Curriculum</h1>
            <ArrayList listItems={listItems} />

        </div>
    )
}
