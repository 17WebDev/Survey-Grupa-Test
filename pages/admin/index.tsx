import UserCard from 'components/cards/Card';
import AdminLayout from 'components/layout/Admin';
import DashboardNav from 'components/nav/Dashboard';

export function AdminPage() {
  return (
    <AdminLayout title="Admin">
      <DashboardNav />
      <section>

      <UserCard/>
      </section>
    </AdminLayout>
  );
}

export default AdminPage;
