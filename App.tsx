import React from 'react';
import NavigatorApp from './src/components/navigators';
import ContextProvider from './src/components/providers';

export default function App() {
  return (
    <ContextProvider>
      <NavigatorApp />
    </ContextProvider>
  );
}
