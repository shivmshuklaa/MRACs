export function EndpointForm({type, endpoint, endpointChange, submitRequest}) {
    return (
        <div className="row border p-5 bg-secondary">
            <input className="form-control-lg" onChange={(e) => {endpointChange(e.target.value)}} type="text" placeholder="enter endpoint" value={ endpoint } />
            <input onClick={submitRequest} type="submit" className="btn btn-lg bg-dark text-white border my-2" value={ type } />
        </div>
    )
}