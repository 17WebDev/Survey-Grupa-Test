import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';

import HomeLayout from 'components/layout/Home';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;

      case 'email':
        setEmail(target.value);
        break;

      case 'password':
        setPassword(target.value);
        break;

      case 'verify':
        setVerify(target.value);
        break;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <HomeLayout title="Sign up">
      <div className="d-flex flex-grow-1 bg-dark">
        <Container className="d-flex justify-content-center align-items-center">
          <Card body className="w-50 px-4 py-4">
            <h3 className="mb-3">Create your account</h3>

            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  autoComplete="name"
                  name="name"
                  onChange={onChange}
                  placeholder="Enter your name"
                  required
                  type="name"
                  value={name}
                />
              </Form.Group>

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

              <Form.Group className="mb-3" controlId="verify">
                <Form.Label>Confirm your password</Form.Label>

                <Form.Control
                  name="verify"
                  onChange={onChange}
                  placeholder="Confirm your password"
                  required
                  type="password"
                  value={verify}
                />
              </Form.Group>

              <p className="mb-3 text-center">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </p>

              <p className="text-center">
                {'Already have an account? '}
                <Link href="/login">
                  <a className="text-decoration-none">Log in</a>
                </Link>
              </p>
            </Form>
          </Card>
        </Container>
      </div>
    </HomeLayout>
  );
}

export default SignUpPage;
