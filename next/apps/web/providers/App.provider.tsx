// PLUGINS IMPORTS //
import React, { StrictMode } from 'react'
import { Provider as ReactReduxProvider } from 'react-redux'

// COMPONENTS IMPORTS //
import { ApolloWrapper } from '@lib/configurations'
import store from '@app/web/state/store'
import i18n from '@app/web/i18n'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export const AppProvider = i18n.appWithTranslation(
  (props: { children: React.ReactElement }): React.ReactElement => {
    return (
      <ApolloWrapper>
        <StrictMode>
          <ReactReduxProvider store={store}>
            <div>{props.children}</div>
          </ReactReduxProvider>
        </StrictMode>
      </ApolloWrapper>
    )
  }
)
