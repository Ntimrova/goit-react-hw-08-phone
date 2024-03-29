import { useDispatch, useSelector } from 'react-redux';
import { apiRemoveContact } from '../redux/contactsSlice';
import { selectVisibleContacts } from '../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(state => selectVisibleContacts(state));

  return (
    <>
      <ul>
        {visibleContacts.map(item => {
          return (
            <li key={item.id}>
              <p>
                {item.name}: <span>{item.number}</span>
              </p>
              <button
                type="button"
                name="delete"
                onClick={() => dispatch(apiRemoveContact(item.id))}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
