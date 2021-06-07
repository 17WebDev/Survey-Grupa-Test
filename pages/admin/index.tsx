import AdminLayout from 'components/layout/Admin';
import DashboardNav from 'components/nav/Dashboard';

export function AdminPage() {
  return (
    <AdminLayout title="Admin">
      <DashboardNav />
    </AdminLayout>
  );
}

export default AdminPage;
