import React from "react";
import { useDispatch } from "react-redux"
import { setFilter } from "../redux/action"

const FilterInput = () => {
    const dispatch = useDispatch()

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return <input type="text" placeholder="Search..." onChange={handleFilterChange} />;

};

export default FilterInput;
