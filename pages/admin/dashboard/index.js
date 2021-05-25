import Column from '../../../components/backend/column';
import Dashboard from '../../../components/backend/dashboard';
import Header from '../../../components/backend/header';
import Sidebar from '../../../components/backend/sidebar';

export default function Example() {
  return (
    <div className='h-screen overflow-hidden bg-gray-100 flex flex-col'>
      {/* Top nav*/}
      <Header />
      {/* Bottom section */}
      <div className='min-h-0 flex-1 flex overflow-hidden'>
        {/* Narrow sidebar*/}
        <Sidebar />
        {/* Main area */}
        <main className='min-w-0 flex-1 border-t  bg-gray-100 text-white border-gray-200 lg:flex'>
          {/* Primary column */}
          <Dashboard />
          {/* Secondary column (hidden on smaller screens) */}
          <Column />
        </main>
      </div>
    </div>
  );
}
