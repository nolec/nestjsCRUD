import Link from 'next/link';

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/board">게시판</Link>
        </li>
      </ul>
    </nav>
  );
};
