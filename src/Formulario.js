import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {

	const [ formularioEnviado, cambiarFormularioEnviado ] = useState(false);

	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
					pais: '',
					sexo: '',
					comentario: ''
				}}

				validate={(valores) => {
					let errores = {};

					// Validación Nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre';
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios.';
					}

					// Validación Correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo';
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo es invalido.';
					}

					// Validación Pais
					if(!valores.pais ){
						errores.pais = 'Por favor selecciona un pais';
					} 

					// Validación Sexo
					if(!valores.sexo ){
						errores.sexo = 'Por favor selecciona un sexo';
					} 
					
					// Validación Comentario
					if(!valores.comentario ){
						errores.comentario = 'Por favor ingresa un comentario';
					} 

					return errores;
				}}

				onSubmit={(valores, {resetForm}) => {
					resetForm();					
					console.log('Formulario Enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000)
				}}
			>
				{( {errors} ) => (
				<Form action=""  className="formulario">
					<div>
						<label htmlFor="nombre">Nombre</label>
						<Field
							type="text"
							name="nombre"
							placeholder="Nombre"
							id="nombre"
						/>
						<ErrorMessage name='nombre' component={() => (<div className='error'>{errors.nombre}</div>)} />
					</div>

					<div>
						<label htmlFor="correo">Correo</label>
						<Field
							type="email"
							name="correo"
							placeholder="Correo"
							id="correo"
		
						/>
						<ErrorMessage name='correo' component={() => (<div className='error'>{errors.correo}</div>)} />


					</div>

					<div>
						<Field name="pais" as="select" placeholder="Selecciona un pais">
							<option value="" selected disabled>Selecciona un pais</option>
							<option value="Chile">Chile</option>
							<option value="España">España</option>
							<option value="Argentina">Argentina</option>
						</Field>
						<ErrorMessage name='pais' component={() => (<div className='error'>{errors.pais}</div>)} />
					</div>

					<div>
						<label>
							<Field name="sexo" type="radio" value="hombre" /> Hombre
						</label>

						<label>
							<Field name="sexo" type="radio" value="mujer" /> Mujer
						</label>
						
						<ErrorMessage name='sexo' component={() => (<div className='error'>{errors.sexo}</div>)} />
					</div>


					<div>
							<Field name="comentario" type="textarea"/> 
						
						
						<ErrorMessage name='comentario' component={() => (<div className='error'>{errors.comentario}</div>)} />
					</div>

					<button type="submit">Enviar</button>
					{formularioEnviado && <p className='exito'>Formulario enviado con exito!</p>}
				</Form>
				)}
			</Formik>
		</>
	);
}
 
export default Formulario;