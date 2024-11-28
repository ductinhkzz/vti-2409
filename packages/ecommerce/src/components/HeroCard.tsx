import React from 'react';

type Props = {
  text: string;
  children?: JSX.Element | React.ReactNode;
};

const HeroCard = ({ text, children }: Props) => {
  return (
    <div>
      <div>{text}</div>
      {children}
    </div>
  );
};

export default HeroCard;
