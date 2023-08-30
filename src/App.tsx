import React from 'react';
import Layout from './components/layout';

import './App.css';
import ScheduleList from './components/sidebar';

const App = () => {

  const scheduleData = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <Layout>
        <ScheduleList data={scheduleData}  />
      </Layout>
    </div>
  );
}

export default App;
