
import StringList from "../component/StringList";

const listItems = [{ title: "Criteria", text: "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades." }]


export default function AdmissionCriteriaPage() {
    return (
        <div id="admissioncriteriapage" className="padding">
            <h1>Admission Criteria</h1>
            <StringList listItems={listItems} />
        </div>
    )
}
