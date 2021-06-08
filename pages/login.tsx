import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import HomeLayout from 'components/layout/Home';

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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push('/admin');
  };

  return (
    <HomeLayout title="Login">
      <div className="d-flex flex-grow-1 bg-dark">
        <Container className="d-flex justify-content-center align-items-center">
          <Card body className="w-50 px-4 py-4">
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
                  <a className="text-decoration-none">Forgot your password?</a>
                </Link>
              </p>

              {/* Submit button */}
              <p className="mb-3 text-center">
                <Button type="submit" variant="primary">
                  Log in
                </Button>
              </p>

              {/* Sign up link */}
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

export default LoginPage;
