export function TypeForm ({type, typeChange}) {
    return (
        <form action="" className="">
            <ul className="text-white row mt-5 p-5" style={{ listStyleType: "none" }}>
            <li className="col d-inline-flex">
                <input onChange={e => typeChange(e.target.value)} type="radio" id="GET" name="requestType" value="GET" checked={type == "GET"} />
                <label htmlFor="GET">GET</label>
            </li>
            <li className="col d-inline-flex">
                <input onChange={e => typeChange(e.target.value)} type="radio" id="POST" name="requestType" value="POST" />
                <label htmlFor="POST">POST</label>
            </li>
            <li className="col d-inline-flex">
                <input onChange={e => typeChange(e.target.value)} type="radio" id="PATCH" name="requestType" value="PATCH" />
                <label htmlFor="PATCH">PATCH</label>
            </li>
            <li className="col d-inline-flex">
                <input onChange={e => typeChange(e.target.value)} type="radio" id="DELETE" name="requestType" value="DELETE" />
                <label htmlFor="DELETE">DELETE</label>
            </li>
            </ul>
        </form>
    )
}