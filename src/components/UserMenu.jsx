import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData, selectAuthisLoading } from '../redux/selectors';
import { apiLogoutUser } from '../redux/auth/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthisLoading);

   const handleLogOut = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? "Could't get user email";
  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogOut} disabled={isLoading} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
