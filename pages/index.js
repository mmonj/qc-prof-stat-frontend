import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import searchProfessor from '../js/searchProfessor';


export default function Home() {
  return (
    <>
      <Container>
        {/* add image or something to padd space after navbar */}
        {/* possibly add screenshot of result when result page is finished*/} 
        <InputGroup className="mb-3 mt-5">
          <Form.Control
            id="search"
            placeholder="Search"
            aria-label="search"
            aria-describedby="search-addon1"
            onKeyUp={() => {if (typeof window !== 'undefined') {searchProfessor()}}}
          />
          <Button variant="outline-secondary" id="button-addon1">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </InputGroup>
        <div id="smth" className='text-center'>

        </div>
      </Container>

    </>
  )
}
