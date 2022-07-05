import PropTypes from 'prop-types';

const Button = ({ className, text, image, onClick }) => (
  <button className={className} type="button" onClick={onClick}>
    {text || image}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.element,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className:
    'h-10 w-full mt-7 rounded-lg font-bold text-white bg-violet-500 hover:bg-purple-800 hover:text-lg ease-in-out duration-500 active:bg-fuchsia-700 active:cursor-progress active:border-2 active:border-pink-500',
  text: '',
  image: <> </>,
};

export default Button;
