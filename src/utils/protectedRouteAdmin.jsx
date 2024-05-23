import { Navigate, Outlet } from "react-router-dom";

// ProtectedRouteAdmin: Componente para proteger rutas específicas para administradores.
// Props:
// - userLog: Objeto que contiene la información del usuario actualmente autenticado.
// - redirect: Ruta a la cual redirigir si el usuario no cumple con los requisitos.

const ProtectedRouteAdmin = ({ userLog, redirect }) => {
  // Verifica si el usuario está autenticado y si es un administrador.
  if (!userLog || userLog.userType !== "ADMINISTRATOR") {
    // Si el usuario no está autenticado o no es un administrador, redirige a la ruta especificada.
    return <Navigate to={redirect} replace />;
  }
  // Si el usuario cumple con los requisitos, renderiza el contenido protegido.
  return <Outlet/>
}

export default ProtectedRouteAdmin;
