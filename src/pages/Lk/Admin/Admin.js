import {useState} from "react";
import {Api} from "../../../utils/api.hook";

const Admin = () => {
    const [form, setForm] = useState({name: "", banner: "", slug: ""})

    const changeHandler = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () =>{
        try {
            await Api.post("api/category/create", {...form}).then((res) => {
                setForm({name: "", banner: "", slug: ""})
            })
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className="col-6 d-flex flex-column">
            <div>Категории</div>
            <input
                placeholder="Название"
                style={{marginTop: 10}}
                value={form.name}
                name="name"
                type="text"
                onChange={changeHandler}
            />
            <div>Баннер</div>
            <input
                placeholder="Баннер"
                style={{marginTop: 10}}
                value={form.banner}
                name="banner"
                type="text"
                onChange={changeHandler}
            />
            <div>Слаг</div>
            <input
                placeholder="Слаг"
                style={{marginTop: 10}}
                value={form.slug}
                name="slug"
                type="text"
                onChange={changeHandler}
            />


            <button
                onClick={registerHandler}
                className="btn btn-primary mt-3"
            >
                Добавить категорию
            </button>
        </div>
    )
}

export default Admin
