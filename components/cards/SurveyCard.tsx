import { CSSProperties } from 'react';
import { Card } from 'react-bootstrap';

import { getDateDiffToToday } from 'lib/date/getDateDiffToToday';
import { Survey, SurveyFilter } from 'lib/types/Survey';
import styles from 'styles/Card.module.scss';

type Props = {
  survey: Survey;
  filter?: SurveyFilter;
  onClick: () => void;
};

function UserCard({
  filter = SurveyFilter.DRAFT,
  onClick = () => {},
  survey,
}: Props) {
  const getHeaderTheme = (): CSSProperties => {
    switch (filter) {
      case SurveyFilter.ACTIVE:
        return {
          backgroundColor: '#cbe1d0',
        };

      case SurveyFilter.CLOSED:
        return {
          backgroundColor: '#f0e29a',
        };

      case SurveyFilter.DRAFT:
      default:
        return {
          backgroundColor: '#cbd5e1',
        };
    }
  };

  const getLastUpdate = () => {
    const { unit, time } = getDateDiffToToday(survey.created_at);

    return `Edited ${time} ${unit} ago`;
  };

  return (
    <Card className="mb-3 cursor-pointer" onClick={onClick}>
      <Card.Header style={getHeaderTheme()} />

      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <div className="flex-grow-1">
            <p className="mb-0 fw-medium">Survey title</p>
          </div>

          <img alt="Image" src="/images/more-vertical.svg" />
        </div>

        <p className="text-muted">
          <small>{getLastUpdate()}</small>
        </p>

        <p className="mb-0">
          <a className={styles.cardBtn} href="">
            <small>Draft</small>
          </a>
        </p>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
