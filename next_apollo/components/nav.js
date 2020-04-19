import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/board">
            <a>게시판</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
