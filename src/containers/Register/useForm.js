import {useState} from "react";

export default () => {

    const [form, setForm] = useState({});

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    };

    console.log('form', form)

    const registerFormValid = !form.username?.length || !form.firstname?.length || !form.lastname?.length || !form.password?.length || !form.email?.length;

    return {form, onChange, registerFormValid};
};