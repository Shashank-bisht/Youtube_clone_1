import React from 'react'

const LeftNavMenuItem = ({text, icon, className, action}) => {
  return (
    <>
    <div className={'text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[.15]' + className} onClick={action}>
      <span>{icon}</span><span className='ml-2'>{text}</span>
    </div>
    </>
  )
}

export default LeftNavMenuItem