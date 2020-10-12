const handleClick = () => {
  console.debug('The page was clicked.')
}

const AppRoot = () => {
  return (
    <>
      <div
        class='w-screen h-screen p-0 m-0 flex justify-center items-center bg-gray-100'
        onClick={handleClick}
      >
        <span class='p-8 rounded shadow bg-white'>
          This is deliberately placed in a div within a{' '}
          <span class='text-pink-500'>Fragment</span>.
        </span>
      </div>
    </>
  )
}

export default AppRoot
