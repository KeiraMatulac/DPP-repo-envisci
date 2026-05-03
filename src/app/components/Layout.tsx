import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { MobileSidebar } from './MobileSidebar';

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="flex-1 w-full">
        <div className="lg:hidden">
          <MobileSidebar />
        </div>
        <Outlet />
      </main>
    </div>
  );
}
