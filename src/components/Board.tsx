import React, { useState } from 'react'
interface Props {
    children: React.ReactNode;
}

const Board = ({ children }: Props) => {
    const [squares] = useState(() => Array(64).fill(null));

    return (
    <div>
      {squares.map(() => children)}
    </div>
  );
};

export default Board;