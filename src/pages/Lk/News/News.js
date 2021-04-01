import {useState} from "react";
import {Api} from "../../../utils/api.hook";

const News = () => {
    const [form, setForm] = useState({name: "", banner: "", description: ""})

    const changeHandler = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () =>{
        try {
            await Api.post("api/news/create", {...form}).then((res) => {
                setForm({name: "", banner: "", description: ""})
            })
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className="col-6 d-flex flex-column">
            <div>Новости</div>
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
            <div>Описание</div>
            <textarea
                placeholder="Описание"
                style={{marginTop: 10}}
                value={form.description}
                name="description"
                type="text"
                onChange={changeHandler}
            />


            <button
                onClick={registerHandler}
                className="btn btn-primary mt-3"
            >
                Добавить новость
            </button>
        </div>
    )
}

export default News
