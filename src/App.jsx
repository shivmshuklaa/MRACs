import { useState, useRef, useEffect} from 'react'
import './App.css'
import {TypeForm, EndpointForm, ResponseBody, OptionsForm} from './components'
import axios from "axios"


function App() {
  const [type, setType] = useState("GET")
  const [endpoint, setEndpoint] = useState("")
  const [body, setBody] = useState()
  const [id, setId] = useState("")
  const [response, setResponse] = useState()
  
  function typeChange(type) {
    setType(type)
  }

  function endpointChange(endpoint) {
    setEndpoint(endpoint)
  }

  function idChange(id) {
    setId(id)
  }

  function bodyChange(body) {
    setBody(body)
  }

  function submitRequest() {
    if (type=="GET") {
      getRequest()
    }
    else if (type=="POST") {
      postRequest()
    }
    else if (type=="PATCH"){
      patchRequest()
    }
    else if (type=="DELETE"){
      deleteRequest()
    }
  }

  function getRequest() {
    if (id) {
      axios.get(`${endpoint}`+`/`+`${id}`)
      .then(response => {
        setResponse(JSON.stringify(response.data))
      })
      .catch(error => {
        setResponse(JSON.stringify(error.message))
      })
    } else {
      axios.get(endpoint)
      .then(response => {
        setResponse(JSON.stringify(response.data))
      })
      .catch(error => {
        setResponse(error.message)
      })
    }
  }

  function postRequest() {
    if (body) {
      axios.post(endpoint, JSON.parse(body),{headers: {'Content-Type': 'application/json'}})
      .then(response => {
        setResponse(JSON.stringify(response.data))
      })
      .catch(error => {
        setResponse(JSON.stringify(error.message))
      })
    }
  }

  function patchRequest() {
    if (id && body) {
      axios.patch(`${endpoint}`+`/`+`${id}`, JSON.parse(body),{headers: {'Content-Type': 'application/json'}})
      .then(response => {
        setResponse(JSON.stringify(response.data))
      })
      .catch(error => {
        setResponse(JSON.stringify(error.message))
      })
    }
  }

  function deleteRequest() {
    if (id) {
      axios.delete(`${endpoint}`+`/`+`${id}`)
      .then(response => {
        setResponse(JSON.stringify(response.data))
      })
      .catch(error => {
        setResponse(JSON.stringify(error.message))
      })
    }
  }

  return (
    <>
      <TypeForm type={type} typeChange={typeChange} />
      <EndpointForm type={type} endpoint={endpoint} endpointChange={endpointChange} submitRequest={submitRequest} />
      <OptionsForm type={type} id={id} idChange={idChange} body={body} bodyChange={bodyChange} />
      <ResponseBody  response={response} />
    </>
  )
}

export default App
