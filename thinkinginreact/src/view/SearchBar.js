import React from 'react'

export default ({filterText, inStockOnly, onFilterText, onInStockOnly}) => {
    return (
        <form>
        {/* E2-state */}
            <input 
                type="text" 
                placeholder="Search..." 
                value={filterText}
                //E3-Inverse Data Flow Step1:apply updated value to inverse function
                onChange={(e) => onFilterText(e.target.value)}
                />
            <p>
                <input 
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnly(e.target.value)}
                />
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}

// class SearchBar extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//       this.handleInStockChange = this.handleInStockChange.bind(this);
//     }
    
//     handleFilterTextChange(e) {
//       this.props.onFilterTextChange(e.target.value);
//     }
    
//     handleInStockChange(e) {
//       this.props.onInStockChange(e.target.checked);
//     }
    
//     render() {
//       return (
//         <form>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={this.props.filterText}
//             onChange={this.handleFilterTextChange}
//           />
//           <p>
//             <input
//               type="checkbox"
//               checked={this.props.inStockOnly}
//               onChange={this.handleInStockChange}
//             />
//             {' '}
//             Only show products in stock
//           </p>
//         </form>
//       );
//     }
//   }