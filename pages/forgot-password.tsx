import Link from 'next/link';
import { Button, Card, Container, Form } from 'react-bootstrap';

import HomeLayout from 'components/layout/Home';

function ForgotPasswordPage() {
  return (
    <HomeLayout title="Forgot password">
      <div className="d-flex flex-grow-1 bg-dark">
        <Container className="d-flex justify-content-center align-items-center">
          <Card body className="w-50 px-4 py-4">
            <h3 className="mb-3">Forgot your password?</h3>

            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail address</Form.Label>

                <Form.Control
                  autoComplete="email"
                  placeholder="Enter your e-mail"
                  type="email"
                />
              </Form.Group>

              <p className="mb-3 text-center">
                <Button type="submit" variant="primary">
                  Send e-mail
                </Button>
              </p>

              <p className="text-center">
                {"Don't have an account? "}
                <Link href="/signup">
                  <a className="text-decoration-none">Sign up</a>
                </Link>
              </p>
            </Form>
          </Card>
        </Container>
      </div>
    </HomeLayout>
  );
}

export default ForgotPasswordPage;
