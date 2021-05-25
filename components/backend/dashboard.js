import { useRouter } from 'next/router';
import UserForm from './forms/users';

function Dashboard() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  const slug = router.query.slug;

{  if (!slug) {
    return <h2>No dashboard found</h2>;
  }
  }
  
  let panel = ''

  if (slug === 'users') {
    panel = <UserForm />
  }
  
  return (
    <section
    aria-labelledby='primary-heading'
    className='min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last'
    >
      <h1 id='primary-heading' className='sr-only'>
        Home
      </h1>
      
      {panel}
      {/* Your content */}
    </section>
  );
}

export default Dashboard;
