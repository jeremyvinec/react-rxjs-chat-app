import React from 'react';
import { useSelector } from 'react-redux';
import { View, ViewProps } from 'react-native';
import { StyleService, StyleType, Text, TextElement, useStyleSheet } from '@ui-kitten/components';
import { ChatMessageIndicator } from './ChatMessageIndicator';
import { Message } from '../../data/data';
import moment from 'moment';

export interface ChatMessageProps extends ViewProps {
  message: Message;
  shouldShowIndicator: boolean;
  children: (message: Message, style: StyleType) => React.ReactElement;
}

export type ChatMessageElement = React.ReactElement<ChatMessageProps>;

export const ChatMessage = (props: ChatMessageProps): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const { user } = useSelector((state: any) => state.User);
  const { style, message, shouldShowIndicator, children, ...viewProps } = props;

  const reply = message.nickname === user.nickname ? true : false;

  const renderDateElement = (): TextElement => (
    <Text
      style={styles.date}
      appearance='hint'
      category='c2'>
      {moment(message.updated_at).format('hh:mm')}
    </Text>
  );

  const renderContentElement = (): React.ReactElement => {
    return children(message, {
      container: [reply ? styles.contentOut : styles.contentIn],
    });
  };

  const renderIndicator = (): React.ReactElement => (
    <ChatMessageIndicator
      style={[reply ? styles.indicatorOut : styles.indicatorIn, styles.indicator]}
      reverse={reply}
    />
  );

  return (
    <View
      {...viewProps}
      style={[reply ? styles.containerOut : styles.containerIn, styles.container, style]}>
      {shouldShowIndicator && renderIndicator()}
      {renderContentElement()}
      {renderDateElement()}
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    alignItems: 'center',
  },
  containerIn: {
    flexDirection: 'row',
  },
  containerOut: {
    flexDirection: 'row-reverse',
  },
  contentIn: {
    backgroundColor: 'color-basic-600',
  },
  contentOut: {
    backgroundColor: 'color-primary-default',
  },
  date: {
    marginHorizontal: 18,
  },
  indicator: {
    width: 6,
    height: 8,
  },
  indicatorIn: {
    backgroundColor: 'color-basic-600',
    transform: [
      { rotate: '-90deg' },
      { translateY: 3 },
      { translateX: -12 },
    ],
  },
  indicatorOut: {
    backgroundColor: 'color-primary-default',
    transform: [
      { rotate: '90deg' },
      { translateY: 3 },
      { translateX: 12 },
    ],
  },
});