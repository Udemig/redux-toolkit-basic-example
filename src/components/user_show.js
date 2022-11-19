import {useSelector} from 'react-redux'

function UserShow() {
  const userState = useSelector(state => state.user)

  return (
    <div>
      <strong>İsim:</strong> {userState.firstname}
      <br />
      <strong>Soyisim:</strong> {userState.lastname}
      <br />
      <strong>Yaş:</strong> {userState.age}
    </div>
  )
}

export default UserShow


