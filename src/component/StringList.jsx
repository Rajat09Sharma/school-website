

export default function StringList({ listItems }) {
    return (
        <>
            {
                listItems.map(listItem => {
                    return <div key={listItem.title} className="mb-5 list-item">
                        <h2 key={listItem.title}>{listItem.title}</h2>
                        <ul>
                            <li>
                                {listItem.text}
                            </li>
                        </ul>

                    </div>
                })
            }
        </>
    )
}
