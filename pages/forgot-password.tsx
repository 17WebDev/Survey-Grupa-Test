import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';

import HomeLayout from 'components/layout/Home';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <HomeLayout title="Forgot password">
      <div className="d-flex flex-grow-1 bg-dark">
        <Container className="d-flex justify-content-center align-items-center">
          <Card body className="w-50 px-4 py-4">
            <h3 className="mb-3">Forgot your password?</h3>

            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail address</Form.Label>

                <Form.Control
                  autoComplete="email"
                  name="email"
                  onChange={onChange}
                  placeholder="Enter your e-mail"
                  required
                  type="email"
                  value={email}
                />
              </Form.Group>

              <p className="mb-3 text-center">
                <Button type="submit" variant="primary">
                  Send e-mail
                </Button>
              </p>

              <p className="text-center">
                {"Don't have an account? "}
                <a className="text-decoration-none">Sign up</a>
              </p>
            </Form>
          </Card>
        </Container>
      </div>
    </HomeLayout>
  );
}

export default ForgotPasswordPage;
