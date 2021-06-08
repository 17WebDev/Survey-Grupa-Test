import { Col, Container, Row } from 'react-bootstrap';

import SurveyCard from 'components/cards/SurveyCard';
import AdminLayout from 'components/layout/Admin';
import UserDashboard from 'components/nav/UserDashboard';
import { Survey } from 'lib/types/Survey';

export function AdminPage() {
  const mock: Survey = {
    title: 'Survey Title',
    created_at: new Date('2021-05-07 22:00'),
    updated_at: new Date(),
  };

  return (
    <AdminLayout title="Dashboard">
      <UserDashboard />

      <Container>
        <Row>
          <Col xs="12" md="4" lg="3">
            <SurveyCard survey={mock} />
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
}

export default AdminPage;
