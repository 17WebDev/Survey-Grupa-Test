import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import HomeLayout from 'components/layout/Home';
import { API_URL } from 'lib/utils/constants';
import { setAuth } from 'lib/hooks/auth';

function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const body = new FormData();
      body.append('email', email);
      body.append('password', password);

      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        body,
      });

      if (response.ok) {
        const result = await response.json();

        setAuth(result.access_token, result.token_type);

        router.push('/admin');
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeLayout title="Login">
      <div className="d-flex flex-grow-1 bg-dark">
        <Container>
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs="12" md="6" lg="5">
              <Card body className="p-2 px-lg-4 py-lg-4">
                {/* Card title */}
                <h3 className="mb-3">Login</h3>

                {/* Login form */}
                <Form onSubmit={onSubmit}>
                  {/* E-mail input */}
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

                  {/* Password input */}
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      name="password"
                      onChange={onChange}
                      placeholder="Enter your password"
                      required
                      type="password"
                      value={password}
                    />
                  </Form.Group>

                  {/* Forgot password link */}
                  <p className="text-end mb-3">
                    <Link href="/forgot-password">
                      <a className="text-decoration-none">
                        Forgot your password?
                      </a>
                    </Link>
                  </p>

                  {/* Submit button */}
                  <p className="mb-3 text-center">
                    <Button type="submit" variant="primary">
                      Log in
                    </Button>
                  </p>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </HomeLayout>
  );
}

export default LoginPage;
