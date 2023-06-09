// import React, { Component } from 'react';

// class App extends Component {
//   alertName = () => {
//     alert('John Doe');
//   };

//   render() {
//     return (
//       <div>
//         <h3>This is a Class Component</h3>
//         <button onClick={this.alertName}>
//           Alert
//         </button>
//       </div>
//     );
//   }
// };

// export default App;

import React from 'react';

function ClassBased() {
  const alertName = () => {
    alert('John Doe');
  };

  return (
    <div>
      <h3>This is a Functional Component</h3>
      <button onClick={alertName}>
        Alert
      </button>
    </div>
  );
};

export default ClassBased;