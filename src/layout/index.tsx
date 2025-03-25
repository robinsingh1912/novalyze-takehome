import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex flex-1 overflow-hidden dark:bg-gray-background-dark dark:text-white'>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
