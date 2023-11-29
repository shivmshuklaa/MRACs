export function OptionsForm ({type, id, idChange, body, bodyChange}) {
    let takeId = true
    let takeBody = false
    if (type == "POST" || type == "PATCH") {takeBody = true}
    if (type == "POST") {takeId = false}
    return (
        <div className="row">
            <div className="col-md-12 p-4 border mx-auto">
                <form>
                    {takeId && 
                        <div className="form-group">
                            <label htmlFor="id">_id</label>
                            <input onChange={e => {idChange(e.target.value)}} value={id} type="email" className="form-control" id="id" placeholder="enter object id" />
                        </div>
                    }
                    {takeBody &&
                        <div className="form-group">
                            <label htmlFor="body">body (json)</label>
                            <textarea onChange={e => {bodyChange(e.target.value)}} value={body} className="form-control" id="body" rows="3" placeholder='{"key": "value"}'></textarea>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}