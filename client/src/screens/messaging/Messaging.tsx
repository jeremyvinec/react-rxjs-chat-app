import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImageSourcePropType, Keyboard, Platform } from 'react-native';
import { Button, Input } from '@ui-kitten/components';
import { KeyboardAvoidingView } from '../../components/keyboard/KeyboardAvoidingView';
import { Chat } from '../../components/chat/Chat';
import { AttachmentsMenu } from '../../components/menu/Menu';
import { MicIcon, PaperPlaneIcon, PlusIcon } from '../../components/icon/Icon';
import {
  saveChat,
  saveChatSuccess,
  getChatByRoom
} from '../../store/actions/Chat';
import { 
  Header,
  HeaderBackAction
} from '../../components/header';
import { images } from '../../styles/Images';
import styles from './MessagingStyle';
import { socket } from '../../utils';

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

interface IMessageProps {};

const Messaging  = ({}: IMessageProps): React.ReactElement => {

  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.User);
  const { chatByRoom } = useSelector((state: any) => state.Chat);
  const [message, setMessage] = useState<string>(null);
  const [attachmentsMenuVisible, setAttachmentsMenuVisible] = useState<boolean>(false);

  const sendButtonEnabled = (): boolean => {
    return message && message.length > 0;
  };

  const toggleAttachmentsMenu = (): void => {
    setAttachmentsMenuVisible(!attachmentsMenuVisible);
  };

  const onSendButtonPress = (): void => {
    dispatch(
      saveChat({
        room: user.room,
        nickname: user.nickname,
        message
      })
    );
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

  useEffect(() => {
    // get all message on room
    chatByRoom.length === 0 
    && user.room 
    && dispatch(getChatByRoom(user.room));
    // listen new message on socket
    socket.on('new-message', (res: any) => {
      if (res.room === user.room) {
        dispatch(saveChatSuccess(res));
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Header
        title='Chat'
        accessoryLeft={HeaderBackAction}
      />
      <Chat
        style={styles.list}
        contentContainerStyle={styles.listContent}
        followEnd={true}
        data={chatByRoom}
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

export default Messaging;