import React from "react";
import classNames from "classnames";
import Button from "./Button";
import PropTypes from "prop-types";

/**
 * Button component for toggling items on/off
 *
 * @component
 * @example
 * return (
 *   <ToggleButton id={"demo"} active={"demo2"} setActive={() => console.log("active!")}>
 *      Demo
 *   </ToggleButton>
 * )
 */
function ToggleButton({ children, setActive, active, id, className }) {
  return (
    <Button
      className={classNames(
        "px-3 py-2 rounded-md font-light",
        {
          "dark:bg-white dark:text-gray-800": active === id,
          "dark:bg-black dark:text-gray-400": active !== id,
        },
        className
      )}
      onClick={() => setActive(id)}
    >
      {children}
    </Button>
  );
}

ToggleButton.propTypes = {
  /**
   * The content inside the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional CSS classes for the button (optional)
   */
  className: PropTypes.string,
  /**
   * The id of the currently active button
   */
  active: PropTypes.string.isRequired,
  /**
   * The function to run to make button active
   */
  setActive: PropTypes.func.isRequired,
  /**
   * Unique identifier for the button
   */
  id: PropTypes.string.isRequired,
};

export default ToggleButton;