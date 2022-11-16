const ClientRoute = ({customerDto}) => {
    return (
        <tr>
            <td>{customerDto.name}</td>
            <td>{customerDto.address}</td>
        </tr>
    )
}

export default ClientRoute;