// Container.tsx
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-5 md:mx-10 lg:max-w-4xl lg:mx-auto">
      {children}
    </div>
  );
};

export default Container;
