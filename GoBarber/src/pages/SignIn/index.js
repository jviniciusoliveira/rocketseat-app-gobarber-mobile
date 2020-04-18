import React from 'react';
import {Text} from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

const ref = React.createRef();

const SignIn = () => {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input
        style={{marginTop: 30}}
        icon="call"
        placeholder="Exemplo Input"
        ref={ref}
      />

      <Button>Entrar</Button>
    </Background>
  );
};

export default SignIn;
