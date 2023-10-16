import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Label, Input } from './styles';
import { addFilter } from '../../redux/contacts/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const changeFilter = e => {
    setValue(e.target.value);
    dispatch(
      addFilter({
        value: e.target.value,
      })
    );
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={changeFilter} />
    </Label>
  );
};
