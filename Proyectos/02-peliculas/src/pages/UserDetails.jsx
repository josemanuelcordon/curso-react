import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const { idUser } = useParams();
  return (
    <div className="text-3xl font-bold">
        <p>{idUser}</p>
    </div>
  )
}

export default UserDetails