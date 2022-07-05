import PropTypes from 'prop-types';
import { MdModeEditOutline } from 'react-icons/md';

const InputEdit = ({ type, name, placeholder, className, value, onChange, children }) => (
  <div className="relative w-full">
    <input
      className={`pr-3 pl-8 ${className}`}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />
    <div className="absolute left-3 top-3">{children}</div>
  </div>
);

InputEdit.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.element,
};

InputEdit.defaultProps = {
  className: 'h-10 w-full rounded-lg outline-fuchsia-500',
  placeholder: '',
  children: <MdModeEditOutline />,
};

export default InputEdit;
