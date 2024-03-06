import MainNavbar from "./MainNavbar"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

const Home = () => {
  return (
    <>
      <MainNavbar />
      <Container>
        <Row>
          <h3>Articles</h3>
        </Row>
        <Row>
          <h3>Topics</h3>
            <Link to="/glycocaylx">
              Glycocaylx
            </Link>
            <Link to="/diapedesis">
              Diapedesis
            </Link>
        </Row>
      </Container>
    </>
  )
}

export default Home
