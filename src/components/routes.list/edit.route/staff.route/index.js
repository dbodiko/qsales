const StaffRoute = ({staffDto}) => {
    return (
        <tr>
            <td>{staffDto.code}</td>
            <td>{staffDto.name}</td>
        </tr>
    )
}

export default StaffRoute;