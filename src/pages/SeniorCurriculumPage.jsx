
import ArrayList from "../component/ArrayList";

const listItems = [
    { title: "Science Stream:", items: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"] },
    { title: "Commerce Stream:", items: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"] }
]

export default function SeniorCurriculumPage() {
    return (
        <div id="seniorpage" className="padding">
            <h1 className="mb-5">Senior Secondary (Grades 11-12):</h1>
            <ul>
                <ArrayList listItems={listItems} />
            </ul>

        </div>
    )
}
