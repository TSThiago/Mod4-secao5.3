import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Button from "../Atoms/Button";


const Form: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            cpf: "",
            email: "",
            phoneNumber: "",
            title: "",
            publishCompany: "",
            publishYear: "",
            date: "",
            time: ""
        }, onSubmit: (values) => {
            let newLoan: object = values
            let myInit = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newLoan)
            };
            fetch('https://apigenerator.dronahq.com/api/lXnDntb7/Library', myInit)
                .then(function (response) {
                    return response.json();
                })
            alert('Empréstimo do ' + values.title + ' efetuado com sucesso.')
        },
        validate: (values) => {
            const errors: { name?: string, cpf?: string, email?: string, phoneNumber?: string, title?: string, publishCompany?: string, publishYear?: string, date?: string, time?: string } = {};
            if (!values.name) {
                errors.name = "Preencha esse campo!"
            } else if (/[^a-zA-ZÀ-ü]/i.test(values.name)) {
                errors.name = "Algarismos inválidos!"
            }

            if (!values.cpf) {
                errors.cpf = "Preencha esse campo!"
            } else if (!parseInt(values.cpf)) {
                errors.cpf = "Insira somente números!"
            }

            if (!values.email) {
                errors.email = "Preencha esse campo!"
            } else if (/[^a-zA-ZÀ-ü0-9@_.]/i.test(values.email)) {
                errors.email = "Algarismo inválidos!"
            }

            if (!values.phoneNumber) {
                errors.phoneNumber = "Preencha esse campo!"
            } else if (!parseInt(values.phoneNumber)) {
                errors.phoneNumber = "Insira somente números!"
            }else if(values.phoneNumber.length > 9){
                errors.phoneNumber = "Quantidade de números inválido!"
            }

            if (!values.title) {
                errors.title = "Preencha esse campo!"
            }

            if (!values.publishCompany) {
                errors.publishCompany = "Preencha esse campo!"
            }

            if (!values.publishYear) {
                errors.publishYear = "Preencha esse campo!"
            } else if (!parseInt(values.publishYear)) {
                errors.publishYear = "Insira somente números!"
            }

            if (!values.date) {
                errors.date = "Preencha esse campo!"
            }

            if (!values.time) {
                errors.time = "Preencha esse campo!"
            } else if (!parseInt(values.time)) {
                errors.time = "Insira somente números!"
            }

            return errors
        }
    })

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setDisabled(!((!!formik.values.name) && (!!parseInt(formik.values.cpf)) && (!!formik.values.email) && ((!!parseInt(formik.values.phoneNumber)) && (formik.values.phoneNumber.length <= 9))
            && (!!formik.values.title) && (!!formik.values.publishCompany) && (!!parseInt(formik.values.publishYear)) && (!!formik.values.date) && (!!parseInt(formik.values.time))))
    }, [formik.values]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="forms">
                <label htmlFor="name">Nome:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.name} id="name" type="text" />
                <p>{formik.errors.name}</p>

                <label htmlFor="cpf">CPF:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.cpf} id="cpf" type="text" />
                <p>{formik.errors.cpf}</p>

                <label htmlFor="email">E-mail:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.email} id="email" type="email" />
                <p>{formik.errors.email}</p>

                <label htmlFor="phoneNumber">Telefone:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.phoneNumber} id="phoneNumber" type="phone" />
                <p>{formik.errors.phoneNumber}</p>
            </div>
            <div className="forms">
                <label htmlFor="title">Título do Livro:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.title} id="title" type="text" />
                <p>{formik.errors.title}</p>

                <label htmlFor="publishCompany">Editora:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.publishCompany} id="publishCompany" type="text" />
                <p>{formik.errors.publishCompany}</p>

                <label htmlFor="publishYear">Ano de Publicação:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.publishYear} id="publishYear" type="text" />
                <p>{formik.errors.publishYear}</p>
            </div>
            <div className="forms">
                <label htmlFor="date">Data do Empréstimo:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.date} id="date" type="text" />
                <p>{formik.errors.date}</p>

                <label htmlFor="time">Hora do Empréstimo:</label>
                <input onChange={formik.handleChange} defaultValue={formik.values.time} id="time" type="text" />
                <p>{formik.errors.time}</p>
            </div>

            <Button disabled={disabled} OnSubmit={formik.handleSubmit}>Cadastrar Empréstimo</Button>
        </form>
    )
}

export default Form;