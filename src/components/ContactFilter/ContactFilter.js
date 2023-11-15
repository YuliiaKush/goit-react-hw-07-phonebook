import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { setNameFilter } from 'redux/filtersSlice';
import { FilterName } from './ContactFilter.styled';
import PropTypes from 'prop-types';

const Filter = () => {
  const contacts = useSelector(selectContacts);
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

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;