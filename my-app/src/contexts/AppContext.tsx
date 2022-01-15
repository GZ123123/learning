import React from 'react';

interface IAppContext {
  isSidebarOpen: boolean,

  setSidebarOpen: (isOpen: boolean) => void
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

const Provider = ({ children }: any) => {

  const [isSidebarOpen, setSidebarOpen] = React.useState(false)

  return (<AppContext.Provider value={{
    isSidebarOpen: isSidebarOpen,

    setSidebarOpen: (isOpen) => setSidebarOpen(isOpen)
  }}>
    {children}
  </AppContext.Provider>)
}

export default Provider;