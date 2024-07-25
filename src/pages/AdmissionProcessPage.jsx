import StringList from "../component/StringList";

const listItems = [{ title: "Process", text: "Admission forms are available for download. Submit the completed form along with required documents at the school office." }]

export default function AdmissionProcessPage() {
    return (
        <div id="admissionprocesspage" className="padding">
            <h1>Admission Process</h1>
            <StringList listItems={listItems} />
        </div>
    )
}
