import { useContext } from 'react'
import avatar from '../../assets/avatar.jpg'
import { GlobalContext } from '../../context'

const User = () => {
  const {setOpenUserSetting} = useContext(GlobalContext)
  return (
    <div className='flex items-center gap-4 text-white'>
        <div>
            <p className='font-bold'>Nguyen Van A</p>
            <p className='text-sm flex justify-end'>SPSO</p>
        </div>
        <div>
            <img src={avatar} className='w-10 h-10 rounded-full cursor-pointer' onClick={()=>setOpenUserSetting(true)}/>
        </div>
    </div>
  )
}
export default User