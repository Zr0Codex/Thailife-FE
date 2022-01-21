import logo from './logo.svg';
import React from 'react';
import className  from "classnames";

import styles from "./App.module.css";
import useMediaQuery from './hooks/useMediaQuery';

const App = () =>{
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);
  return(
    <div
      className={className([
        styles.layout,
        isMobile && styles.mobile,
        isMobile && styles.tablet,
      ])}
    >
    </div>
  );
};

export default App;
