
import React from 'react';
//@ts-ignore
import { Rings } from 'react-loader-spinner'
import "../styles/FullPageLoader.sass"

const FullPageLoader = () => (
  <div className="full-page-loader">
    <Rings
      color="#6a69ff"
      height={100}
      width={100}
    />
  </div>
)

export default FullPageLoader;