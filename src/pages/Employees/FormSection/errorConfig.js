export const nameError = (error) => {
  switch (error) {
    case 'required':  return 'El nombre es obligatorio'
    case 'maxLength':  return 'Longitud máxima de 30 caracteres'
    case 'minLength':  return 'Logitud mínima de 1 caracter'
    default:  return '';
  }
}

export const apellidoError = (error) => {
  switch (error) {
    case 'required':  return 'Los apellidos son obligatorios'
    case 'maxLength':  return 'Longitud máxima de 50 caracteres'
    case 'minLength':  return 'Logitud mínima de 1 caracter'
    default:  return '';
  }
}

export const calendarioError = (error) => {
  switch (error) {
    case 'required':  return 'La fecha de nacimiento es obligatoria'
    default:  return '';
  }
}