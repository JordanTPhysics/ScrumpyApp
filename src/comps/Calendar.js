import React from 'react';
import DatePicker from 'react-date-picker';

function Calendar(props) {
  
  

  return (
    <div>
      <DatePicker  value={props.date} onChange={props.onChange}/>
    </div>
  );
}
export default Calendar;