/**
 * Recupera los datos del usuario almacenados en localStorage.
 * 
 * Esta función obtiene una cadena JSON almacenada bajo la clave "userData" en localStorage, 
 * la parsea y devuelve como un objeto JavaScript. Si no hay datos almacenados, devuelve null.
 * 
 * @returns {Object|null} Los datos del usuario como un objeto JavaScript, o null si no existen datos almacenados.
 */
export const getUserData = () => {
  // Obtiene la cadena JSON almacenada bajo la clave "userData" en localStorage
  const storedUserData = localStorage.getItem("userData");

  // Si existen datos almacenados, los parsea y devuelve como un objeto JavaScript
  // Si no existen datos almacenados, devuelve null
  return storedUserData ? JSON.parse(storedUserData) : null;
};
