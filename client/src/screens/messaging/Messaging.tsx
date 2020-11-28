import React from 'react';
import { ImageSourcePropType, Keyboard, Platform } from 'react-native';
import { Button, Input, StyleService, useStyleSheet } from '@ui-kitten/components';
import { KeyboardAvoidingView } from '../../components/keyboard/KeyboardAvoidingView';
import { Chat } from '../../components/chat/Chat';
import { AttachmentsMenu } from '../../components/menu/Menu';
import { MicIcon, PaperPlaneIcon, PlusIcon } from '../../components/icon/Icon';
import { Message } from '../../data/data';
import Header from '../../components/header/Header';
import { images } from '../../styles/Images';

const initialMessages: Message[] = [
  Message.howAreYou(),
  Message.imFine(),
  Message.imFineToo(),
  Message.walkingWithDog(),
  Message.imageAttachment1(),
  Message.imageAttachment2(),
  Message.canIJoin(),
  Message.sure(),
];

const galleryAttachments: ImageSourcePropType[] = [
  images.attachment,
  images.attachement2,
  images.attachment,
  images.attachement2,
];

const keyboardOffset = (height: number): number => Platform.select({
  android: 0,
  ios: height,
});

export default (): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [message, setMessage] = React.useState<string>(null);
  const [attachmentsMenuVisible, setAttachmentsMenuVisible] = React.useState<boolean>(false);

  const sendButtonEnabled = (): boolean => {
    return message && message.length > 0;
  };

  const toggleAttachmentsMenu = (): void => {
    setAttachmentsMenuVisible(!attachmentsMenuVisible);
  };

  const onSendButtonPress = (): void => {
    setMessages([...messages, new Message(message, 'now', true, null)]);
    setMessage(null);
    Keyboard.dismiss();
  };

  const renderAttachmentsMenu = (): React.ReactElement => (
    <AttachmentsMenu
      attachments={galleryAttachments}
      onSelectPhoto={toggleAttachmentsMenu}
      onSelectFile={toggleAttachmentsMenu}
      onSelectLocation={toggleAttachmentsMenu}
      onSelectContact={toggleAttachmentsMenu}
      onAttachmentSelect={toggleAttachmentsMenu}
      onCameraPress={toggleAttachmentsMenu}
      onDismiss={toggleAttachmentsMenu}
    />
  );

  return (
    <React.Fragment>
      <Header
        title='Chat'
      />
      <Chat
        style={styles.list}
        contentContainerStyle={styles.listContent}
        followEnd={true}
        data={messages}
      />
      <KeyboardAvoidingView
        style={styles.messageInputContainer}
        offset={keyboardOffset}>
        <Button
          style={[styles.iconButton, styles.attachButton]}
          accessoryLeft={PlusIcon}
          onPress={toggleAttachmentsMenu}
        />
        <Input
          style={styles.messageInput}
          placeholder='Message...'
          value={message}
          onChangeText={setMessage}
          accessoryLeft={MicIcon}
        />
        <Button
          appearance='ghost'
          style={[styles.iconButton, styles.sendButton]}
          accessoryLeft={PaperPlaneIcon}
          disabled={!sendButtonEnabled()}
          onPress={onSendButtonPress}
        />
      </KeyboardAvoidingView>
      {attachmentsMenuVisible && renderAttachmentsMenu()}
    </React.Fragment>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  messageInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: 'background-basic-color-1',
  },
  attachButton: {
    borderRadius: 24,
    marginHorizontal: 8,
  },
  messageInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  sendButton: {
    marginRight: 4,
  },
  iconButton: {
    width: 24,
    height: 24,
  },
});