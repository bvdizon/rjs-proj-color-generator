import { toast } from 'react-toastify';

const SingleColor = ({ color }) => {
  const { hex, weight, type } = color;

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Copied to clipboard');
      } catch (error) {
        toast.error('Failed to copy to clipboard');
      }
    } else {
      toast.error('Clipboard not supported');
    }
  };

  return (
    <article
      className={type === 'shade' ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipboard}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default SingleColor;
