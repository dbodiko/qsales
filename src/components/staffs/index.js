import "./style.css"

const Staffs = ({name, code, phone}) => {
    return (
        <tr>
            <td>{code}</td>
            <td>{name}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default Staffs;