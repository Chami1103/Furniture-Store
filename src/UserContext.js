// import React, { createContext, useState, useContext } from 'react';

// // Create the UserContext
// export const UserContext = createContext();

// // Create a custom hook to use the UserContext
// export const useUser = () => {
//   return useContext(UserContext);
// };

// // Create a UserProvider component
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // You can set the user value based on your authentication logic here

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };





// UserContext.js
// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export function useUser() {
//   return useContext(UserContext);
// }

// export function UserProvider({ children }) {
//   const [userId, setUserId] = useState(null);

//   return (
//     <UserContext.Provider value={{ userId, setUserId }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
