import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { 
  Button,
  Input,
} from '@ui-kitten/components';
import {
  useForm,
  Controller
} from 'react-hook-form';
import { 
  ImageOverlay 
} from '../../../components/overlay/ImageOverlay';
import { 
 AlertIcon
} from '../../../components/icon/Icon';
import {
  Header,
} from '../../../components/header';
import { 
  KeyboardAvoidingView
} from '../../../components/keyboard/3rdParty';
import styles from './RegisterStyle';
import {
  config,
  initialState
} from './Config';
import { getUser } from '../../../store/actions/User';
import { images } from '../../../styles/Images';
import { useNavigation } from '@react-navigation/core';

interface IRegisterProps {
  getUser: (e: string) => void;
}

const Register = ({
  getUser,
}: IRegisterProps): React.ReactElement => {

  const { control, handleSubmit, errors } = useForm();
  const { navigate } = useNavigation();

  const onSubmit = async (data: any) => {
    getUser(data)
    navigate && navigate('Messaging');
  };

  return (
    <KeyboardAvoidingView>
      <Header
        title='User'
      />
      <ImageOverlay
        style={styles.container}
        source={images.background}>
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
          size='medium'
          onPress={handleSubmit(onSubmit)}>
          SEND
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: (e: any) => dispatch(getUser(e)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Register);