import React from 'react';
import {
  Layout,
  TopNavigation
} from '@ui-kitten/components';

import styles from './HeaderStyle';

interface HeaderProps {
  title?: string;
  Subtitle?: string;
  accessoryLeft?: any;
  accessoryRight?: any;
}

const Header = ({
  title,
  Subtitle,
  accessoryLeft,
  accessoryRight
}: HeaderProps) => {

  return (
    <Layout style={styles.container}>
      <TopNavigation
        alignment='center'
        title={title}
        subtitle={Subtitle}
        appearance='control'
        accessoryLeft={accessoryLeft}
        accessoryRight={accessoryRight}
      />
    </Layout>
  );
};

export default Header;
