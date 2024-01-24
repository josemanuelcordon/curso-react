import { Outlet } from 'react-router-dom'

const RootMoviesLayout = () => {
  return (
    <div>
        <div>Aqui coloco el nav</div>
        <Outlet/>
        <div>Aqui coloco el footer</div>
    </div>
  )
}

export default RootMoviesLayout