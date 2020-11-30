import React from 'react';
import { connect } from 'react-redux';
import {
  TopNavigationAction
} from '@ui-kitten/components';
import {
  BackIcon
} from '../icon/Icon';
import { useNavigation } from '@react-navigation/core';

const RenderBackActions = () => {

  const { goBack } = useNavigation();

  const onBack = () => {
    // todo exit chat
    goBack();
  };

   return (
      <TopNavigationAction
          onPress={onBack}
          icon={BackIcon}
      />
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    //getChatByRoom: (e: string) => dispatch(getChatByRoom(e)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(RenderBackActions);
