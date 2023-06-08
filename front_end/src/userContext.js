import { createContext, userState } from "react";

export const userContext = createContext();

// 定义Provider组件
export const UserProvider = ({children}) => {
    // 声明一个userId状态变量以及更新函数
    const [userId, setUserId] = userState(null);

    return (
        <userContext.Provider value={{ userId, setUserId}}>
            {children}
        </userContext.Provider>
    );
};