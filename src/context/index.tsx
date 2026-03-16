import React from 'react';

import detail, { DetailProvider } from './detailContext';

export const EntireContextProvider = ({ children }: React.PropsWithChildren) => (
	<DetailProvider>{children}</DetailProvider>
);

export default { detail };
