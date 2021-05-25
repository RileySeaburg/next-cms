import Fragment from 'react'

function Column() {
  return (
    <>
      {/* Secondary column (hidden on smaller screens) */}
      <aside className='hidden lg:block lg:flex-shrink-0  lg:order-first'>
        <div className='h-full relative flex flex-col w-96 border-r   border-gray-200 bg-gray-900'>
          {/* Your content */}
          <div className=' flex flex-col'>
            <label htmlFor='blog'>Draft a post...</label>
            <textarea name='blog' id='text-1' cols='30' rows='10'></textarea>
            <button>Submit</button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Column;
