import React, { useState, useEffect } from 'react';
import { connect, useStore, useSelector } from 'react-redux';
import { ImageSourcePropType, Keyboard, Platform } from 'react-native';
import { Button, Input } from '@ui-kitten/components';
import { KeyboardAvoidingView } from '../../components/keyboard/KeyboardAvoidingView';
import { Chat } from '../../components/chat/Chat';
import { AttachmentsMenu } from '../../components/menu/Menu';
import { MicIcon, PaperPlaneIcon, PlusIcon } from '../../components/icon/Icon';
import { Message } from '../../data/data';
import { 
  getChatByRoom
} from '../../store/actions/Chat';
import { 
  Header,
  HeaderBackAction
} from '../../components/header';
import { images } from '../../styles/Images';
import styles from './MessagingStyle';

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

interface IMessageProps {
  getChatByRoom: (e: string) => void;
}

const Messaging  = ({
  getChatByRoom
}: IMessageProps): React.ReactElement => {

  const { room } = useSelector((state: any) => state.Chat);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [message, setMessage] = useState<string>(null);
  const [attachmentsMenuVisible, setAttachmentsMenuVisible] = useState<boolean>(false);

  const sendButtonEnabled = (): boolean => {
    return message && message.length > 0;
  };

  const toggleAttachmentsMenu = (): void => {
    setAttachmentsMenuVisible(!attachmentsMenuVisible);
  };

  const onSendButtonPress = (): void => {
    //addMessage()
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

  useEffect(() => {
    return () => {
      getChatByRoom(room)
    };
  }, [])
  console.log(useStore().getState())
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

const mapStateToProps = (state: any) => {
  return { message: state.message };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getChatByRoom: (e: string) => dispatch(getChatByRoom(e)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messaging);