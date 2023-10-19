import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
      <i className="logoMain fa fa-shield" aria-hidden="true"></i>
      Nombre del proyecto
      </div>
      <div className="topCenter">
      <i className="topSearch fa fa-search" aria-hidden="true"> Buscar</i>
      </div>
      <div className="topRight">
        <i className="plusIcon fa fa-plus" aria-hidden="true"> Agregar Tarea</i>
        <i className="userIcon fa fa-user-circle" aria-hidden="true"></i>
      </div>
    </div>
  )
}
