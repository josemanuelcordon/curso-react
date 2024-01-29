import { Outlet } from 'react-router-dom'
import Nav from '../components/components/Nav'

const RootMoviesLayout = () => {
  return (
    <div className="bg-gray-700">
        <Nav/>
        <Outlet/>
        <div>Aqui coloco el footer</div>
    </div>
  )
}

export default RootMoviesLayout