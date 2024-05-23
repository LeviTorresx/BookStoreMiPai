import { Navigate, Outlet } from "react-router-dom";

// ProtectedRoute: Componente para proteger rutas basadas en una condición.
// Props:
// - canActivate: Booleano que determina si se debe redirigir al usuario.
// - redirect: Ruta a la cual redirigir si canActivate es verdadero.

const ProtectedRoute = ({ canActivate, redirect }) => {
  // Verifica si canActivate es verdadero.
  if (canActivate) {
    // Si canActivate es verdadero el usuario esta logeado correctamente, redirige a la ruta especificada.
    return <Navigate to={redirect} replace />;
  }
  // Si canActivate es falso, renderiza el contenido protegido.
  return <Outlet />;
};

export default ProtectedRoute;