import { render } from '@testing-library/react';

import TsNxWorkspaceUi from './ui';

describe('TsNxWorkspaceUi', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<TsNxWorkspaceUi />);
    expect(baseElement).toBeTruthy();
  });
  
});
