import dynamic from 'next/dynamic';

import AdminLayout from 'components/layout/Admin';
import SurveyJSON from 'lib/mocks/Survey.json';

const SurveyJS = dynamic(() => import('components/survey/SurveyJS'), {
  ssr: false,
});

type Props = {
  json: any;
};

function SurveyInfoPage({ json }: Props) {
  return (
    <AdminLayout title="Survey">
      <SurveyJS json={json} />
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  return {
    props: { json: SurveyJSON },
  };
}

export default SurveyInfoPage;
