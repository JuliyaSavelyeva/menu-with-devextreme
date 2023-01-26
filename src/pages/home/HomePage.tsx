import React from 'react';
import './home.scss';

export const HomePage = () => {
  return (
    <React.Fragment>
      <h2 className={'title'}>Home</h2>
      <div>
        <div className={'dx-card responsive-paddings'}>
          <h3><i>«Fall seven times and stand up eight». (Japanese Proverb)</i></h3>
          <h3><i>«Take the first step in faith. You don’t have to see the whole staircase, just take the first step.»
            (Martin Luther King Jr).</i></h3>
          <h3><i>«Success is the ability to go from failure to failure without losing your enthusiasm.» (Winston
            Churchill).</i></h3>
        </div>
      </div>
    </React.Fragment>
  );
};
