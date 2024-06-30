import { ReactNode } from "react";


type TContainerProps={
    children:ReactNode
}

const Container = ({children}:TContainerProps) => {
    return (
        <div className="bg-red-400 h-screen w-2/3 mx-auto">
            {children}
        </div>
    );
};

export default Container;