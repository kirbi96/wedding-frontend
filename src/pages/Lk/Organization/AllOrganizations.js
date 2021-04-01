import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Api} from "../../../utils/api.hook";
import "./AllOrganizations.css"
import OrganizationItem from "../../../components/OrganizationItem";

const AllOrganizations = () =>{
    const[data, setData] = useState([])

    const getData = async () =>{
        await Api.get("/api/organization/").then((res) =>{
            setData(res.data)
        })
    }

    const deleteItem = (id) =>{
        console.log(id)
    }

    useEffect(() =>{
        getData()
    },[])

    return(
        <div>
            <Link className="btn btn-dark" to="/add-organization">Добавить организацию</Link>
            <div className="mt-4">
                {data.map((item) =>(
                    <div key={item._id}>
                        <OrganizationItem deleteItem={(id) => deleteItem(id)} item={item}/>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default AllOrganizations
