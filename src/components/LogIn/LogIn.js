import React from 'react';
import { Button} from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const {user, signInWithGoogle} = useFirebase();
    console.log(user);
    return (
        <div>
              <Button onClick={signInWithGoogle} variant="warning">login</Button>
        </div>
    );
};

export default LogIn;