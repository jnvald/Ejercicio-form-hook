import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        password: " ",
        confirmPassword: " "
    })

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.firstName + '' + datos.lastName)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
        <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-8">
                <label htmlFor="firstName"></label>
                <input 
                    placeholder="Ingrese su nombre"
                    aria-label="Ingrese su nombre"
                    className="form-control"
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}
                ></input>    
            </div>
            <div className="col-md-8">
                <label htmlFor="lastName"></label>
                <input
                    placeholder="Ingrese su apellido"
                    className="form-control"
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}
                ></input>    
            </div>
                <div className="col-md-8">
                <label htmlFor="email"></label>
                <input
                    placeholder="e-mail"
                    className="form-control"
                    id="inputEmail4"
                    onChange={handleInputChange}
                    type="text"
                    name="email"
                ></input>    
            </div>
            <div className="col-md-8">
                <label htmlFor="password"></label>
                <input
                    placeholder="Ingrese su password"
                    className="form-control"
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                ></input>    
            </div>
                <div className="col-md-8">
                <label htmlFor="confirmPassword"></label>
                <input
                    placeholder="Confirme su password"
                    className="form-control"
                    onChange={handleInputChange}
                    type="password"
                    name="confirmPassword"
                ></input>
            </div>
        
            <div className="col-md-8">
            <br></br>
                <button
                    className="btn btn-primary"
                    type="submit">Mostrar en consola</button>
            </div>
            
        </form>
        <hr className="col-md-8"></hr>
        <h2 className="bg-secondary col-md-8">Output:</h2>
        <h4 className="text-danger">Nombre: {datos.firstName}</h4>
        <h4 className="text-danger">Apellido: {datos.lastName}</h4>
        <h4 className="text-success">e-mail: {datos.email}</h4>
        <h4 className="text-info">Password: {datos.password}</h4>
        <h4 className="text-info">Password Confirm: {datos.confirmPassword}</h4>
        </Fragment>
    )
}

export default Formulario;

 