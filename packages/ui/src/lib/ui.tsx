
import styles from './ui.module.css';

import { HelloServer } from './hello-server';

export function TsNxWorkspaceUi() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TsNxWorkspaceUi!</h1>
      <HelloServer />
    </div>
  );
}

export default TsNxWorkspaceUi;



