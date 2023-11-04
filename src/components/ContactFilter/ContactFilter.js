import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { setNameFilter } from 'redux/filtersSlice';
import { FilterName } from './ContactFilter.styled';

 const Filter = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setNameFilter(e.target.value));
  };

  if (contacts.length === 0) {
    return null;
  }

  return (
    <>
      <label>Find contacts by Name </label>
      <FilterName
        type="text"
        placeholder="Enter filter"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;