import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';

import SurveyCard from 'components/cards/SurveyCard';
import AdminLayout from 'components/layout/Admin';
import DashboardNav from 'components/nav/Dashboard';
import { Survey, SurveyFilter } from 'lib/types/Survey';

export function AdminActiveSurveysPage() {
  const mock: Survey = {
    title: 'Survey Title',
    created_at: new Date('2021-05-07 22:00'),
    updated_at: new Date(),
  };

  const router = useRouter();

  return (
    <AdminLayout title="Dashboard">
      <DashboardNav />

      <Container>
        <Row>
          <Col xs="12" md="4" lg="3">
            <SurveyCard
              onClick={() => router.push('/admin/survey/1')}
              survey={mock}
              filter={SurveyFilter.ACTIVE}
            />
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
}

export default AdminActiveSurveysPage;
