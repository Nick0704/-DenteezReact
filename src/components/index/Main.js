import React, {Component} from 'react';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import  RightSidebar from './RightSidebar';

class Main extends Component {
  render() {
    return (
      <main  className="main-autorized">
        <div className="main-content">
          <LeftSidebar />
          <MainContent />
          <RightSidebar />
        </div>
      </main>
    )
  }
}
export default Main;