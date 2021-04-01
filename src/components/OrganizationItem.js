
const OrganizationItem = ({item, deleteItem}) =>{
    return(
        <div className="d-flex justify-content-between mt-2">
            <div className="d-flex">
                <img className="banner" src={item?.banner}/>
                <div>
                    <div className="ml-3 h5">{item?.name}</div>
                    <div className="ml-3 h6">{item?.description.substring(0, 60)}</div>
                </div>

            </div>
            <div onClick={() => deleteItem(item._id)} className="btn badge-danger">Удалить</div>
        </div>
    )
}

export default OrganizationItem
