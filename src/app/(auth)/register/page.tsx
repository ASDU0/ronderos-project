
export default function Page() {
  return (
    <div className="container">

      <div className="row">
        <div className="span12">
          <div className="page-header">
            <h1>
              Registrarse
            </h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="span12">
          <div className="media">

            <div className="media-body">
              <center>
                <a className="btn btn-large btn-primary" href="#">Registrase con Facebook</a>
                <hr />
                <input type="text" name="name" placeholder="Nombre" /> <br />
                <input type="text" name="email" placeholder="Email" /> <br />
                <input type="password" name="password" placeholder="Contraseña" /> <br />
                <input type="password" name="repassword" placeholder="Repita su Contraseña" /> <br />
                <a className="btn btn-large btn-success" href="#">Registrar</a>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}