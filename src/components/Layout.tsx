import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, UserCog, CalendarDays, GraduationCap, Wallet, Settings, LogOut } from 'lucide-react';

function SidebarLink({ to, icon: Icon, label }: { to: string; icon: React.ComponentType<{ size?: number; className?: string }>; label: string }): React.ReactElement {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700'}`
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
}

export default function Layout(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <div className="app-layout">
      <aside className="app-sidebar border-r bg-white">
        <div className="flex h-14 items-center justify-center border-b">
          <span className="text-base font-semibold">EduAdmin</span>
        </div>
        <nav className="flex flex-col gap-1 p-3">
          <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" />
          <SidebarLink to="/students" icon={Users} label="Students" />
          <SidebarLink to="/courses" icon={BookOpen} label="Courses" />
          <SidebarLink to="/instructors" icon={UserCog} label="Instructors" />
          <SidebarLink to="/classes" icon={CalendarDays} label="Classes" />
          <SidebarLink to="/grades" icon={GraduationCap} label="Grades" />
          <SidebarLink to="/finance" icon={Wallet} label="Finance" />
          <SidebarLink to="/settings" icon={Settings} label="Settings" />
        </nav>
      </aside>

      <header className="app-topbar flex items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Educational Admin Panel</span>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
          onClick={() => navigate('/login')}
          aria-label="Logout"
        >
          <LogOut size={16} /> Logout
        </button>
      </header>

      <main className="app-content overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

