import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './style.css';

type Props = {
  children?: string | null;
};

const Markdown = ({ children }: Props) => {
  if (!children) {
    return null;
  }

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className='markdown'>
      {children}
    </ReactMarkdown>
  );
};

export { Markdown };
