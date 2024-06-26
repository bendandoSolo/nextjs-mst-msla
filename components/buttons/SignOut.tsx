import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { IStore, useStore } from "../../store";
// import { logout } from '../../authConfig';

interface IOwnProps {
    store?: IStore;
}

const SignOut: React.FC<IOwnProps> = observer((props) => {
    const store = useStore(props.store);

  return (
    <button onClick={() => store.auth.signOut()}>Sign Out</button>
    // <button onClick={() => logout()}>Sign Out</button>
  );
});

export default SignOut;