import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="side">
      <div className="topSide">
        <ul className="topList">
          <li><i className="topImg fa fa-book" aria-hidden="true"></i>Backlog</li>
          <li><i className="topImg fa fa-tachometer" aria-hidden="true"></i>Tablero</li>
          <li><i className="topImg fa fa-area-chart" aria-hidden="true"></i>Reporte</li>
          <li><i className="topImg fa fa-inbox" aria-hidden="true"></i>Bandeja de entrada</li>
          <li><i className="topImg fa fa-cog" aria-hidden="true"></i>Configuracion</li>
        </ul>
      </div>
      <div className="bottomSide">
        <ul className="bottomList">
          <li><b>Etiqueta</b></li>
          <li><i className="topImg fa fa-check" aria-hidden="true"></i>Publicado</li>
          <li><i className="topImg fa fa-calendar" aria-hidden="true"></i>Para hoy</li>
          <li><i className="topImg fa fa-bookmark" aria-hidden="true"></i>Guardados</li>
        </ul>
      </div>
    </div>
  )
}
