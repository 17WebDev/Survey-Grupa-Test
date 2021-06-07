import { Button, Card, Container, Form } from 'react-bootstrap';

import HomeLayout from 'components/layout/Home';

function LoginPage() {
  return (
    <HomeLayout title="Login">
      <div className="d-flex flex-grow-1 bg-dark">
        <Container className="d-flex justify-content-center align-items-center">
          <Card body className="w-50 p-4">
            <h3 className="text-center">Login</h3>

            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail address</Form.Label>

                <Form.Control
                  autoComplete="email"
                  placeholder="Enter your e-mail"
                  type="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  placeholder="Enter your password"
                  type="password"
                />
              </Form.Group>

              <p className="mb-0 text-end">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </p>
            </Form>
          </Card>
        </Container>
      </div>
    </HomeLayout>
  );
}

export default LoginPage;
