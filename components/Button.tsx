export default function Button({
  text,
  href,
  children,
  outLink,
}: {
  text: string;
  href: string;
  children: React.ReactNode;
  outLink: boolean;
}) {
  return (
    <a
      href={href}
      className='
        rounded-full px-4 py-1  inline-flex items-center justify-center gap-2 transition-colors border 
        
   
        bg-gray-100 text-gray-800 border-gray-300 
        hover:bg-gray-900 hover:border-gray-700 hover:text-white
        
  
        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 
        dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black
      '
      {...(outLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {text}
    </a>
  );
}
