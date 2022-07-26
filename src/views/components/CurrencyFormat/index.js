import NumberFormat from "react-number-format";
import React from "react";
import PropTypes from "prop-types";

const CurrencyFormat = ({
  value,
  prefix,
  decimalSeparator,
  thousandSeparator,
  allowNegative,
}) => {
  return (
    <NumberFormat
      thousandsGroupStyle="thousand"
      value={value}
      prefix={prefix}
      decimalSeparator={decimalSeparator}
      displayType="text"
      type="text"
      thousandSeparator={thousandSeparator}
      allowNegative={allowNegative}
    />
  );
};

CurrencyFormat.defaultProps = {
  value: 0,
  prefix: "Rp",
  decimalSeparator: ".",
  thousandSeparator: true,
  allowNegative: false,
};

CurrencyFormat.propTypes = {
  value: PropTypes.string,
  prefix: PropTypes.string,
  decimalSeparator: PropTypes.string,

  allowNegative: PropTypes.bool,
};

export default CurrencyFormat;
