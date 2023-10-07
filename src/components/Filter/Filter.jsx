import { useDispatch, useSelector } from "react-redux";
import { FilterContainer, FilterInput } from "./Filter.styled";
import { getFilter, setFilter } from "redux/slice";


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterContainer>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </FilterContainer>
  );
};