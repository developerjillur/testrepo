import React, {Component} from 'react';

// export const Search = () => (
//     <div>
//         <form action="#" className="header-search-field" method="post">
//             <input type="text" name="header-search" className="form-control search-fild" placeholder="Search Hotels in a sec" />
//             <button className="header-search-submit-icon" type="submit"><i className="fas fa-search"></i></button>
//         </form>
//     </div>
// )

class Search extends Component {

    render(){

        return(
            <div>
                <form action="#" className="header-search-field" method="post">
                    <input type="text" name="header-search" className="form-control hotel-search-fild" placeholder="Search Hotels in a sec" autoFocus />
                    <button className="header-search-submit-icon" type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        );
    }

}

export default Search;