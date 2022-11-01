import {Label, Input, SecondaryTitle} from '../Main.styled'
const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Label>
      <SecondaryTitle>Find contacts by name</SecondaryTitle>
      <Input type="text" value={filter} onChange={onChangeFilter} />
    </Label>
  );
};

export default Filter;
