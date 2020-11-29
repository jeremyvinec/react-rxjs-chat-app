import React from 'react';
import { View } from 'react-native';
import { 
  Button,
  CheckBox,
  Input,
  Text 
} from '@ui-kitten/components';
import {
  useForm,
  Controller
} from 'react-hook-form';
import { 
  ImageOverlay 
} from '../../../components/overlay/ImageOverlay';
import { 
  ProfileAvatar
} from '../../../components/profile/ProfileAvatar';
import { 
 FacebookIcon,
 GoogleIcon,
 PersonIcon,
 PlusIcon,
 TwitterIcon ,
 AlertIcon
} from '../../../components/icon/Icon';
import Header from '../../../components/header/Header';
import { 
  KeyboardAvoidingView
} from '../../../components/keyboard/3rdParty';
import styles from './RegisterStyle';
import {
  config,
  initialState
} from './Config';
import { images } from '../../../styles/Images';

export default ({ navigation }): React.ReactElement => {

  const [userName, setUserName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const { control, handleSubmit, errors } = useForm();

  const onSignUpButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onSignInButtonPress = (): void => {
    navigation && navigation.navigate('SignIn4');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPhotoButton = (): React.ReactElement => (
    <Button
      style={styles.editAvatarButton}
      size='small'
      accessoryLeft={PlusIcon}
    />
  );

  return (
    <KeyboardAvoidingView>
      <Header
        title='User'
      />
      <ImageOverlay
        style={styles.container}
        source={images.background}>
        <View style={styles.headerContainer}>
          <ProfileAvatar
            style={styles.profileAvatar}
            resizeMode='center'
            source={images.person}
            editButton={renderPhotoButton}
          />
        </View>
        <View style={styles.formContainer}>
          {config && Object.keys(initialState).map((id: string) => (
            <Controller
              key={id}
              control={control}
              render={({ onChange, onBlur, value }) => (
                <Input
                  key={id}
                  label={config[id].label}
                  placeholder={config[id].placeholder}
                  autoCapitalize='words'
                  status='control'
                  captionIcon={errors[config[id].name] && AlertIcon}
                  caption={errors[config[id].name] && errors[config[id].name].message}
                  secureTextEntry={config[id].secureTextEntry}
                  style={styles.formInput}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name={config[id].name}
              rules={{
                required: {
                  value: config[id].required,
                  message: config[id].message
                }
              }}
              defaultValue={config[id].defaultValue}
            />
          ))}
        </View>
        <Button
          style={styles.signUpButton}
          size='giant'
          onPress={onSignUpButtonPress}>
          SIGN UP
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text
            style={styles.socialAuthHintText}
            status='control'>
            Or Register Using Social Media
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance='ghost'
              size='giant'
              status='control'
              accessoryLeft={FacebookIcon}
            />
            <Button
              appearance='ghost'
              size='giant'
              status='control'
              accessoryLeft={GoogleIcon}
            />
            <Button
              appearance='ghost'
              size='giant'
              status='control'
              accessoryLeft={TwitterIcon}
            />
          </View>
        </View>
        <Button
          style={styles.signInButton}
          appearance='ghost'
          status='control'
          onPress={onSignInButtonPress}>
          Already have account? Sign In
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};