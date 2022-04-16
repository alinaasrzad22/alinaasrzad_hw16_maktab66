
import  React  from 'react';


  // Context has been created
const  TabContext  =  React.createContext(false);
// Provider
const  TabProvider  =  ({ children })  =>  {
    const  [toggle, setToggle]  =  React.useState(false);
    const toggleFunction =  ()  =>  {
    setToggle(!toggle);
};
return  (
    <TabContext.Provider value={{ toggle, toggleFunction }}>
        {children}
    </TabContext.Provider>
    );
};
export  {  TabContext,  TabProvider  };