
import React from 'react';
import { axios } from 'axios';
axios({
    method: 'get',
    url: 'localhost:3306',
    responseType: 'stream'
  })

function Data() {
  return (
    <div>Data</div>
  )
}

export default Data