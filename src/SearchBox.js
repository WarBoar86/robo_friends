import React from 'react';

const SearchBox = () =>{
   
   return (
        <div className="pa3">
            <input 
                type="search" 
                className="pa3 ba b--green bg-lightest-blue"
                placeholder="Search Robots"
            />
        </div>
    );
}

export default SearchBox;