const FormSearchBar = ({handleSearchBar}) => {
    return <>
    <label>Search by status</label>
    <input type="text" onChange={handleSearchBar} required></input>
    </>;
};

export default FormSearchBar;