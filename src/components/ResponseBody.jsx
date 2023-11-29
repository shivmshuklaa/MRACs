export function ResponseBody({response}) {
    return (
        <>
            {response &&
                <div className="row">
                    <div className="col-md-12 mt-5 p-3 border">
                        <code className="text-light font-weight-normal">response &gt; <br/> {response}</code>
                    </div>
                </div>
            }
        </>
    )
}