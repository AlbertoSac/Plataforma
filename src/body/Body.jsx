import "./body.css"

export default function Body() {
  return (
    <div className="body">
      <div className="right">
        <ul>
            <li>Mis tickets</li>
            <li>Filtro</li>
            <li>Tipo</li>
            <li>Vista</li>
        </ul>

      </div>

    <div className="left">
        <h1 className="Title">Backlog</h1>
        <ul>
            <li>Pendientes</li>
            <li>Por hacer</li>
            <li>En proceso</li>
        </ul>
    </div>
      
    </div>
  )
}
