import React, {FC} from 'react';
import './OFDButton.css';


interface IOFDButtonProps {
  primary: boolean;
  backgroundColor: string;
  pseudoClass: string
  size: string,
  label: string,
  hover: boolean,
}

/**
 * Primary UI component for user interaction
 */
export const OFDButton: FC<IOFDButtonProps> = ({
  /* флаг для стиля кнопки основная\неосновная */ 
  primary,
  // backgroundColor,
  pseudoClass,
  size,
  label,
  hover,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  const hoverMode = hover ? `storybook-button--hover` : '';

  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        `storybook-button--${pseudoClass}`,
        mode,
        hoverMode,
      ].join(' ')}
      // style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};