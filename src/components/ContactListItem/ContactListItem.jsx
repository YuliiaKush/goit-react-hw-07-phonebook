import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { useState } from 'react';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleContactDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(id));
  };

  return (
    <>
      {name}: {number}
      <Button type="button" onClick={handleContactDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;