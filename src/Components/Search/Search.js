import React from 'react';
import Fuse from 'fuse.js';

const searchResult = (event, data, searchHandler) => {
    const options = {
        shouldSort: true,
        tokenize: true,
        threshold: 0.0,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: ['name', 'email', 'company.name'],
    }
    let fuse = new Fuse(data, options);
    let filterResult = fuse.search(event.target.value);
    searchHandler(filterResult);
}

const Search = (props) => {
    return(
        <div className="search-employee col-md-12">
            <input
                type="text"
                id="search-emp" 
                placeholder="Search Record" 
                onChange={(event) => searchResult(event, props.searchItem, props.searchHandler)}
                onKeyDown={(e) => props.listReset(e)}
            />
        </div>
    )
}

export default Search;