import './tag.css'

function Tag(props) {
    return(
        <ul className="tag-container">
            {props.tags.map((tag, idx) => {
                return(
                    <li className="tag-list" key={idx}>
                        {tag}
                    </li>
                )
            })}

        </ul>
    )
}

export default Tag