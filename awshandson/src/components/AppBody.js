import React from 'react';
import AppBodyRow1 from './AppBodyRow1';
import AppBodyRow2 from './AppBodyRow2';
class AppBody extends React.Component {
  render() {
    return (
      <div>

        <div className="App">
          <AppBodyRow1 />
          <AppBodyRow2 />
        </div>


      </div>
    );
  }
}
export default AppBody;