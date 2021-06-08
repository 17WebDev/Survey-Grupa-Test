import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';

import HomeLayout from 'components/layout/Home';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

  return (
    <HomeLayout title="Home">
      <Fragment />
    </HomeLayout>
  );
}
