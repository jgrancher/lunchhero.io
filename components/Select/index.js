// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledSelect from './styles';

class Select extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.any,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
  };

  static defaultProps = {
    defaultValue: null,
    onChange: () => {},
    options: [],
  };

  onChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <StyledSelect
        defaultValue={this.props.defaultValue}
        name={this.props.name}
        onChange={this.onChange}
      >
        {this.props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </StyledSelect>
    );
  }
}

export default Select;
