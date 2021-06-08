import Link from 'next/link';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  Accordion,
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { PlusCircle, Trash } from 'react-bootstrap-icons';

import AdminLayout from 'components/layout/Admin';
import { Question, QuestionType } from 'lib/types/Question';
import styles from 'styles/CreateSurvey.module.scss';

const initialQuestionData: Question = {
  title: '',
  choices: [''],
  type: QuestionType.CHECKBOX,
};

function CreateSurveyPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setQuestions([initialQuestionData]);
  }, []);

  const onChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;
    }
  };

  const onChangeQuestion =
    (index: number) =>
    ({
      target: { value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const items = questions.map((question, i) => {
        if (index === i) {
          return {
            ...question,
            title: value,
          };
        }

        return question;
      });

      setQuestions(items);
    };

  const onChangeType = (
    // @ts-ignore
    { target: { value } }: FormEvent<HTMLSelectElement>,
    index: number
  ) => {
    const items = [...questions];

    items[index].type = value;

    setQuestions(items);
  };

  const addQuestion = () => {
    if (questions.length < 15) {
      const items = [...questions];

      items.push(initialQuestionData);

      setQuestions(items);
    }
  };

  const addChoice = (index: number) => {
    const items = questions.map((question, i) => {
      if (index === i) {
        return {
          ...question,
          choices: [...question.choices, ''],
        };
      }

      return question;
    });

    setQuestions(items);
  };

  const onChangeChoice =
    (questionIndex: number, choiceIndex: number) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const items = questions.map((question, i) => {
        if (questionIndex === i) {
          return {
            ...question,
            choices: question.choices.map((choice, j) =>
              choiceIndex === j ? value : choice
            ),
          };
        }

        return question;
      });

      setQuestions(items);
    };

  /**
   * Delete choice.
   *
   * @param questionIndex - Question index.
   * @param choiceIndex - Choice index.
   */
  const deleteChoice = (questionIndex: number, choiceIndex: number) => {
    if (questions[questionIndex].choices.length > 1) {
      const items = questions.map((question, i) => {
        if (questionIndex === i) {
          return {
            ...question,
            choices: question.choices.filter((_, j) => choiceIndex !== j),
          };
        }

        return question;
      });

      setQuestions(items);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <AdminLayout title="New survey">
      <Form onSubmit={onSubmit}>
        <section className={styles.userMenu}>
          <Container>
            <Breadcrumb className={styles.userNav}>
              <Link href="/admin" passHref>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Link>

              <Breadcrumb.Item active>Create survey</Breadcrumb.Item>
            </Breadcrumb>
          </Container>

          <div className={styles.btnContainer}>
            <Button className={styles.surveyBtn}>Publish</Button>
          </div>
        </section>

        <Container className="my-4">
          <Card className="mb-4 mx-auto">
            <Card.Header className="bg-white-50 fw-medium">
              New survey
            </Card.Header>

            <Card.Body>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Survey title</Form.Label>

                <Form.Control
                  name="title"
                  onChange={onChange}
                  placeholder="Enter the survey title"
                  required
                  type="text"
                  value={title}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>

                <Form.Control
                  as="textarea"
                  name="description"
                  onChange={onChange}
                  placeholder="Description"
                  required
                  rows={3}
                  type="text"
                  value={description}
                />
              </Form.Group>
            </Card.Body>
          </Card>

          <Accordion defaultActiveKey="0">
            {questions.map((question, index) => (
              <Accordion.Item
                className="mx-auto"
                eventKey={String(index)}
                key={`question-${index}`}
              >
                <Accordion.Header className="fw-medium">
                  Question #{index + 1}
                  {question.title !== '' ? ` - ${question.title}` : ''}
                </Accordion.Header>

                <Accordion.Body>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Question title</Form.Label>

                        <Form.Control
                          name="title"
                          onChange={onChangeQuestion(index)}
                          placeholder="Enter the question title"
                          required
                          type="text"
                          value={question.title}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Question type</Form.Label>

                        <Form.Select
                          name="type"
                          onChange={(e) => onChangeType(e, index)}
                          required
                          value={question.type}
                        >
                          <option value={QuestionType.CHECKBOX}>
                            Multiple choice
                          </option>

                          <option value={QuestionType.RADIO}>
                            Unique choice
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <hr />

                  <Form.Label>Choices</Form.Label>

                  {question.choices.map((choice, i) => (
                    <Row key={`question-${index}-choice-${i}`}>
                      <Col>
                        <Form.Group
                          className="mb-3"
                          controlId={`choice-${index}-${i}`}
                        >
                          <Form.Control
                            name={`choice-${index}-${i}`}
                            onChange={onChangeChoice(index, i)}
                            placeholder="Choice"
                            required
                            type="text"
                            value={choice}
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Trash
                          className="cursor-pointer m-0"
                          onClick={() => deleteChoice(index, i)}
                          size={24}
                        />
                      </Col>
                    </Row>
                  ))}

                  <Button
                    className="mt-3"
                    disabled={questions.length === 15}
                    onClick={() => addChoice(index)}
                    variant="dark"
                  >
                    <PlusCircle /> Add choice
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <Button
            className="mt-3"
            onClick={addQuestion}
            disabled={questions.length === 15}
            variant="primary"
          >
            <PlusCircle /> Add question
          </Button>
        </Container>
      </Form>
    </AdminLayout>
  );
}

export default CreateSurveyPage;
