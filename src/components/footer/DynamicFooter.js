
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useFetch } from 'react-hooks-fetch'


const Modal = ({ children }) => (
  ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('root')
  )
)


const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};


// check for error and display error message
const Err = ({ error }) => <span>Error:{error.message}</span>


// instantiate fetch hook to get data from server
const DynamicFooter = () => {
  
  // prod server
  // const url = 'http://sgcdc.saeon.ac.za:8081/spreadsheet'
  // localhost
  const url = 'http://localhost:8081/spreadsheet'
  const { error, data } = useFetch(url)
  if (error) return <Err error={error} />
  if (!data) return null
 
  // const {isShowing, toggle} = useModal()
 

  // footer component populated with fetched data
  return (
   
    <MDBFooter color="blue" >
      
      <MDBContainer fluid className="text-md-center">
        
        <MDBRow >
          <MDBCol md="2" >
          <ToggleContent toggle={show => 
            <h5 className="title" style={{cursor:'pointer', boxShadow:'none'}} onClick={show}>
             {data.map((data, uuid) => [uuid === 0 ? data.title : ''])}
            </h5>}
            content={hide => (
            <Modal style={{boxShadow:'none'}}>
              <h5 dangerouslySetInnerHTML =
                { {__html: data.map((data, uuid) => [uuid === 0 ? data.title : '']).join("")}}
              />
              <p dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 0 ? data.longdescription : '']).join("")}}
              />
              <button onClick={hide}>Close</button>
            </Modal>
            )}
          />
          <p>
            {data.map((data, uuid) => [uuid === 0 ? data.shortdescription : ''])}
          </p>
          </MDBCol>
          <MDBCol md="2">
          <ToggleContent toggle={show => 
            <h5 className="title" style={{cursor:'pointer', boxShadow:'none'}} onClick={show}>
             {data.map((data, uuid) => [uuid === 1 ? data.title : ''])}
            </h5>}
            content={hide => (
            <Modal style={{boxShadow:'none'}}>
              <h5 dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 1 ? data.title : '']).join("")}}
              />
              <p dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 1 ? data.longdescription : '']).join("")}}
              />
              <button onClick={hide}>Close</button>
            </Modal>
            )}
          />
          <p>
            {data.map((data, uuid) => [uuid === 1 ? data.shortdescription : ''])}
          </p>
          </MDBCol>
          <MDBCol md="2">
          <ToggleContent toggle={show => 
            <h5 className="title" style={{cursor:'pointer', boxShadow:'none'}} onClick={show}>
             {data.map((data, uuid) => [uuid === 2 ? data.title : ''])}
            </h5>}
            content={hide => (
            <Modal style={{boxShadow:'none'}}>
              <h5 dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 2 ? data.title : '']).join("")}}
              />
              <p dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 2 ? data.longdescription : '']).join("")}}
              />
              <button onClick={hide}>Close</button>
            </Modal>
            )}
          />
          <p>
            {data.map((data, uuid) => [uuid === 2 ? data.shortdescription : ''])}
          </p>
          </MDBCol>
          <MDBCol md="2">
          <ToggleContent toggle={show => 
            <h5 className="title" style={{cursor:'pointer', boxShadow:'none'}} onClick={show}>
             {data.map((data, uuid) => [uuid === 3 ? data.title : ''])}
            </h5>}
            content={hide => (
            <Modal style={{boxShadow:'none'}}>
              <h5 dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 3 ? data.title : '']).join("")}}
              />
              <p dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 3 ? data.longdescription : '']).join("")}}
              />
              <button onClick={hide}>Close</button>
            </Modal>
            )}
          />
          <p>
            {data.map((data, uuid) => [uuid === 3 ? data.shortdescription : ''])}
          </p>
          </MDBCol>
          <MDBCol md="2">
          <ToggleContent toggle={show => 
            <h5 className="title" style={{cursor:'pointer', boxShadow:'none'}} onClick={show}>
             {data.map((data, uuid) => [uuid === 4 ? data.title : ''])}
            </h5>}
            content={hide => (
            <Modal style={{boxShadow:'none'}}>
              <h5 dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 4 ? data.title : '']).join("")}}
              />
              <p dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 4 ? data.longdescription : '']).join("")}}
              />
              <button onClick={hide}>Close</button>
            </Modal>
            )}
          />
          <p>
            {data.map((data, uuid) => [uuid === 4 ? data.shortdescription : ''])}
          </p>
          </MDBCol>
          <MDBCol md="2">
          <ToggleContent toggle={show => 
            <h5 className="title" style={{cursor:'pointer', boxShadow:'none'}} onClick={show}>
             {data.map((data, uuid) => [uuid === 5 ? data.title : ''])}
            </h5>}
            content={hide => (
            <Modal style={{boxShadow:'none'}}>
              <h5 dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 5 ? data.title : '']).join("")}}
              />
              <p dangerouslySetInnerHTML =
                {{__html: data.map((data, uuid) => [uuid === 5 ? data.longdescription : '']).join("")}}
              />
              <button onClick={hide}>Close</button>
            </Modal>
            )}
          />
          <p>
            {data.map((data, uuid) => [uuid === 5 ? data.shortdescription : ''])}
          </p>
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy;  {new Date().getFullYear()} Copyright: SAEON
        </MDBContainer>
      </div>
    </MDBFooter>
   
  )
}

export default DynamicFooter

