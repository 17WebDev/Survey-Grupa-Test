import dynamic from 'next/dynamic';

import AdminLayout from 'components/layout/Admin';

const SurveyJS = dynamic(() => import('components/survey/SurveyJS'));

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
    props: { json: {} },
  };
}

export default SurveyInfoPage;
