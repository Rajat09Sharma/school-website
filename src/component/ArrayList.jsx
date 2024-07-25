
export default function ArrayList({ listItems }) {
    return (
        <>
            {listItems.map(listItem => {
                return <div key={listItem.title} className="mb-5 list-item">
                    <h2 key={listItem.title}>{listItem.title}</h2>
                    <ul>
                        {listItem.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            })}
        </>
    )
}
