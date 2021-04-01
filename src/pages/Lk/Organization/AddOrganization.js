import {defaultForm} from "../../../helpers/defaultForm/defaultForm";
import {useEffect, useState} from "react";
import {Api} from "../../../utils/api.hook";
import Select from "react-select";

const AddOrganization = () => {
    const data = defaultForm

    const [form, setForm] = useState(data)
    const [cityList, setCityList] = useState({value: 'Выберите город', label: 'Выберите город'})
    const [categoryList, setCategoryList] = useState({value: 'Выберите категорию', label: 'Выберите категорию'})

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const changeHandlerService = (e, index, type) => {
        const data = form.service
        type === "price" ? data[index].price = e.target.value : data[index].category = e.target.value
        setForm({...form, service: data})
    }

    const changeHandlerSocial = (e, index) => {
        const data = form.social
        data[index].url = e.target.value
        setForm({...form, social: data})
    }

    const changeHandlerGallery = (e, index) => {
        const data = form.images
        data[index].image = e.target.value
        setForm({...form, images: data})
    }

    const addPhoto = () => {
        const data = form.images
        data.push({image: ""})
        setForm({...form})
    }

    const addService = () => {
        const data = form.service
        data.push({category: "", price: 1000})
        setForm({...form})
    }

    const registerHandler = async () => {
        try {
            await Api.post("api/organization/create", {...form}).then((res) => {
                window.location.reload();
            })
        } catch (e) {
            console.log(e)
        }
    }

    const getCity = async () => {
        try {
            await Api.get("api/city/",).then((res) => {
                const dataCity = res.data.map(item => ({value: item.name, label: item.name}))
                setCityList(dataCity)
            })
        } catch (e) {
            console.log(e)
        }
    }

    const getCategory = async () => {
        try {
            await Api.get("api/category/",).then((res) => {
                const dataCategory = res.data.map(item => ({value: item.name, label: item.name}))
                setCategoryList(dataCategory)
            })
        } catch (e) {
            console.log(e)
        }
    }

    const changeCity = (e) => {
        setForm({...form, city: e.value})
    }

    const changeCategory = (e) => {
        // console.log(123, e)
        setForm({...form, category: e?.value})
    }

    useEffect(() => {
        getCity()
        getCategory()
    }, [])

    return (
        <div className="col-12">

            <div className="row">
                <div className="d-flex col-6 flex-column mt-3">
                    <div>Информация</div>
                    <div style={{marginTop: 10}}>
                        <Select
                            placeholder={"Выберите категорию"}
                            options={categoryList}
                            onChange={changeCategory}
                        />
                    </div>
                    <input
                        placeholder="Название"
                        style={{marginTop: 10}}
                        value={form.name}
                        name="name"
                        type="text"
                        onChange={changeHandler}
                    />
                    <input
                        placeholder="Описание"
                        style={{marginTop: 10}}
                        value={form.description}
                        name="description"
                        type="text"
                        onChange={changeHandler}
                    />
                    <input
                        placeholder="Ссылка на баннер/аватар"
                        style={{marginTop: 10}}
                        value={form.banner}
                        name="banner"
                        type="text"
                        onChange={changeHandler}
                    />
                    <input
                        placeholder="Телефон"
                        style={{marginTop: 10}}
                        value={form.phone}
                        name="phone"
                        type="text"
                        onChange={changeHandler}
                    />

                    <div style={{marginTop: 10}}>
                        <Select
                            placeholder={"Выберите город"}
                            options={cityList}
                            onChange={changeCity}
                        />
                    </div>

                </div>
                <div className="d-flex col-6 flex-column mt-3">
                    <div className="d-flex flex-row justify-content-between">
                        <div>Услуги</div>
                        {form.service.length < 4 && (
                            <button
                                onClick={addService}
                                className="btn btn-primary"
                            >
                                Добавить услугу
                            </button>
                        )}

                    </div>
                    <div>
                        {form.service.map((item, index) => (
                            <>
                                <input
                                    className="col-9"
                                    placeholder={`услуга ${index + 1}`}
                                    style={{marginTop: 10}}
                                    value={item.category}
                                    type="text"
                                    onChange={(e) => changeHandlerService(e, index, "cat")}
                                />
                                <input
                                    className="col-3"
                                    style={{marginTop: 10}}
                                    value={item.price}
                                    type="text"
                                    onChange={(e) => changeHandlerService(e, index, "price")}
                                />
                            </>
                        ))}

                    </div>
                    {/*<div>*/}
                    {/*    <input*/}
                    {/*        className="col-9"*/}
                    {/*        placeholder="услуга 2"*/}
                    {/*        style={{marginTop: 10}}*/}
                    {/*        value={form.service[1].category}*/}
                    {/*        type="text"*/}
                    {/*        onChange={(e) => changeHandlerService(e, 1, "cat")}*/}
                    {/*    />*/}
                    {/*    <input*/}
                    {/*        className="col-3"*/}
                    {/*        style={{marginTop: 10}}*/}
                    {/*        value={form.service[1].price}*/}
                    {/*        type="text"*/}
                    {/*        onChange={(e) => changeHandlerService(e, 1, "price")}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input*/}
                    {/*        className="col-9"*/}
                    {/*        placeholder="услуга 3"*/}
                    {/*        style={{marginTop: 10}}*/}
                    {/*        value={form.service[2].category}*/}
                    {/*        type="text"*/}
                    {/*        onChange={(e) => changeHandlerService(e, 2, "cat")}*/}
                    {/*    />*/}
                    {/*    <input*/}
                    {/*        className="col-3"*/}
                    {/*        style={{marginTop: 10}}*/}
                    {/*        value={form.service[2].price}*/}
                    {/*        type="text"*/}
                    {/*        onChange={(e) => changeHandlerService(e, 2, "price")}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input*/}
                    {/*        className="col-9"*/}
                    {/*        placeholder="услуга 4"*/}
                    {/*        style={{marginTop: 10}}*/}
                    {/*        value={form.service[3].category}*/}
                    {/*        type="text"*/}
                    {/*        onChange={(e) => changeHandlerService(e, 3, "cat")}*/}
                    {/*    />*/}
                    {/*    <input*/}
                    {/*        className="col-3"*/}
                    {/*        style={{marginTop: 10}}*/}
                    {/*        value={form.service[3].price}*/}
                    {/*        type="text"*/}
                    {/*        onChange={(e) => changeHandlerService(e, 3, "price")}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>


                <div className="d-flex col-6 flex-column mt-3">
                    <div className="d-flex flex-row justify-content-between">
                        <div>Галерея</div>
                        <button
                            onClick={addPhoto}
                            className="btn btn-primary"
                        >
                            Добавить изображение
                        </button>
                    </div>

                    {form.images.map((item, index) => (
                        <input
                            key={index}
                            placeholder="ссылка на изображение"
                            style={{marginTop: 10}}
                            value={form.images[index]?.image}
                            type="text"
                            onChange={(e) => changeHandlerGallery(e, index)}
                        />
                    ))}

                </div>
                <div className="d-flex col-6 flex-column mt-3">
                    <div>Соц сети</div>
                    <input
                        placeholder="VK"
                        style={{marginTop: 10}}
                        value={form.social[0].url}
                        type="text"
                        onChange={(e) => changeHandlerSocial(e, 0)}
                    />
                    <input
                        placeholder="inst"
                        style={{marginTop: 10}}
                        value={form.social[1].url}
                        type="text"
                        onChange={(e) => changeHandlerSocial(e, 1)}
                    />
                    <input
                        placeholder="site"
                        style={{marginTop: 10}}
                        value={form.social[2].url}
                        type="text"
                        onChange={(e) => changeHandlerSocial(e, 2)}
                    />
                    <input
                        placeholder="telegram"
                        style={{marginTop: 10}}
                        value={form.social[3].url}
                        type="text"
                        onChange={(e) => changeHandlerSocial(e, 3)}
                    />
                </div>


                <button
                    onClick={registerHandler}
                    className="btn btn-primary mt-3 ml-3"
                >
                    Добавить организацию
                </button>
            </div>
        </div>
    )
}

export default AddOrganization
