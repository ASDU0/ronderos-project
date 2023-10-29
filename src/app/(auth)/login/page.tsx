

export default function Page() {
  return (
    <div className="container">

      <div className="row">
        <div className="span12">
          <div className="page-header">
            <h1>
              Login
            </h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="span12">
          <div className="media">

            <div className="media-body">
              <center>
                <a className="btn btn-large btn-primary" href="#">Entrar con Facebook</a>
                <hr />
                <input type="text" name="name" placeholder="Nombre" /> <br />
                <input type="text" name="email" placeholder="Email" /> <br />
                <input type="checkbox" />Mantenerme Conectado <br />
                <a className="btn btn-large btn-success" href="#">Entrar</a>
              </center>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}