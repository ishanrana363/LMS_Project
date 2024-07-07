import Nav from 'react-bootstrap/Nav';

function Login() {
  return (
    <div className="container mt-5 " >
      <div>
        <h3 style={{
          color:"balck",
          fontWeight:"700"
        }}
        className='text-center' >
          Login page
        </h3>
        <h3 className='text-center' style={{
          color:"black",
          fontWeight:"700"

        }}
        >You can login email and phone number</h3>
      </div>
      <Nav className='mt-5'
      style={{
        display:"flex",
        justifyContent:"center"
      }}
      variant="pills" defaultActiveKey="/email">
      <Nav.Item>
        <Nav.Link href="/email">Email</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/phone">Phone </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default Login;
