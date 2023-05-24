export default function Footer() {
  return (
    <p className='mx-auto my-16 text-center text-quaternary'>
      Developed by
      <a
        className='ml-1 text-secondary hover:text-primary group'
        href='https://cortesdev.de'
        target='_blank'
        rel='noopener noreferrer'
      >
        Ricardo Cortes
        <span className='ml-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100'>
          ↗
        </span>
      </a>
    </p>
  )
}
