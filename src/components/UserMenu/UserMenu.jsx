import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from '../../redux/auth/operations';
// import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useSelector();

  const handleClick = () => {
    dispatch();
  };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
