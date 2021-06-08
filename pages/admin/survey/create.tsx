import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';

import AdminLayout from 'components/layout/Admin';
import { Question, QuestionType } from 'lib/types/Question';

const initialQuestionData: Question = {
  title: '',
  choices: [],
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
          const item = {
            ...question,
            title: value,
          };

          return item;
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

    items[index].type = value as QuestionType;

    setQuestions(items);
  };

  const onClickAdd = () => {
    if (questions.length < 15) {
      const items = [...questions];

      items.push(initialQuestionData);

      setQuestions(items);
    }
  };

  return (
    <AdminLayout title="New survey">
      <Container className="my-4">
        <Form>
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
                key={`question-${index}`}
                className="mx-auto"
                eventKey={String(index)}
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
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <Button
            className="mt-3"
            onClick={onClickAdd}
            disabled={questions.length === 15}
            variant="primary"
          >
            <PlusCircle /> Add question
          </Button>
        </Form>
      </Container>
    </AdminLayout>
  );
}

export default CreateSurveyPage;
