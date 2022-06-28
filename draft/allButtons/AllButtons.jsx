import React from 'react';
import PropTypes from 'prop-types';
import './allButtons.css';
// import {LargeLoadingButton} from '../button1/Button.stories';
import { DefaultButton } from '../sampleButton/Button.stories';
import { Button123 } from '../sampleButton/Button';

/**
 * Primary UI component for user interaction
 */
export const AllButtons = ({
  primary,
  backgroundColor,
  commonStyle,
  pseudoClass,
  variant,
  size,
  label,
  hover,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  const hoverMode = hover ? `storybook-button--hover` : '';

  const productTypes = [
    'main',
    'edo',
    'gosotchet',
    'arenda',
    'um',
    'big-data',
    'check-index',
  ];

  const colors = [
    'primary',
    'edo',
    'gosotchet',
    'danger',
    'success',
    'info',
    'info',
  ];

  function colorsFromProductTypes(productType) {
    return colors[productTypes.indexOf(productType)];
  }

  // if (!primary) {
  //   secondaryStyling
  // }
  function spreadTable(e) {
    e.preventDefault();
    console.log('AllButtons clicked.');
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Main</th>
          <th>ЭДО</th>
          <th>Госотчёт</th>
          <th>Аренда</th>
          <th>Учёт Марок</th>
          <th>BigData</th>
          <th>Чек Индекс</th>
          <th>
            <button
              type="button"
              className={[
                'storybook-button',
                'all-buttons',
                `storybook-button--${variant}`,
                `storybook-button--${size}`,
                `common-styling--spread`,
                mode,
                hoverMode,
              ].join(' ')}
              onClick={spreadTable}
              style={backgroundColor && { backgroundColor }}
              {...props}
            >
              Spread
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {productTypes.map((productType) => (
            <td key={Math.random()}>
              <button
                type="button"
                className={[
                  'storybook-button',
                  'all-buttons',
                  `storybook-button--${variant}`,
                  `storybook-button--${size}`,
                  `common-styling--${productType}`,
                  mode,
                  hoverMode,
                ].join(' ')}
                style={backgroundColor && { backgroundColor }}
                {...props}
              >
                Button
              </button>
            </td>
          ))}
          <td></td>
        </tr>
        <tr>
          {productTypes.map((productType) => (
            <td key={Math.random()}>
              <button
                type="button"
                className={[
                  'storybook-button',
                  'all-buttons',
                  `storybook-button--${size}`,
                  `common-styling--${productType}`,
                  `storybook-button--focus`,
                  mode,
                  hoverMode,
                ].join(' ')}
                style={backgroundColor && { backgroundColor }}
                {...props}
              >
                Focus
              </button>
            </td>
          ))}
          <td></td>
        </tr>
        <tr>
          {productTypes.map((productType) => (
            <td key={Math.random()}>
              <button
                type="button"
                className={[
                  'storybook-button',
                  'all-buttons',
                  `storybook-button--${size}`,
                  `common-styling--${productType}-hover`,
                  mode,
                  hoverMode,
                ].join(' ')}
                style={backgroundColor && { backgroundColor }}
                {...props}
              >
                Hover
              </button>
            </td>
          ))}
          <td></td>
        </tr>
        <tr>
          {productTypes.map((productType) => (
            <td key={Math.random()}>
              <button
                type="button"
                className={[
                  'storybook-button',
                  'all-buttons',
                  `storybook-button--${size}`,
                  `common-styling--${productType}-hover`,
                  'storybook-button--active-shadows',
                  mode,
                  hoverMode,
                ].join(' ')}
                style={backgroundColor && { backgroundColor }}
                {...props}
              >
                Active
              </button>
            </td>
          ))}
          <td></td>
        </tr>
        <tr>
          {productTypes.map((productType) => (
            <td key={Math.random()}>
              {colorsFromProductTypes(productType)}
              <Button123
                children={'Large button with loader'}
                variant="filled"
                // color={productType.toString()}
                color={colorsFromProductTypes(productType)}
                // color={`${productType}`}
                isLoading="true"
              >
                {/*<Button123*/}
                {/*  children={'Filled primary button'}*/}
                {/*  size="small"*/}
                {/*  variant="filled"*/}
                {/*  color='primary'*/}
                {/*  size='large'*/}
                {/*  isLoading=true*/}
                {/*  children={'Large button with loader'}*/}
                {/*  color='gosotchet'*/}
              </Button123>
            </td>
          ))}
          <td></td>
        </tr>
        <tr>
          {productTypes.map((productType) => (
            <td key={Math.random()}>
              <button
                type="button"
                className={[
                  'storybook-button',
                  'all-buttons',
                  `storybook-button--${size}`,
                  `common-styling--${productType}`,
                  `storybook-button--disabled`,
                  mode,
                  hoverMode,
                ].join(' ')}
                style={backgroundColor && { backgroundColor }}
                {...props}
              >
                Disabled
              </button>
            </td>
          ))}
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

AllButtons.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  commonStyle: PropTypes.oneOf([
    'main',
    'edo',
    'gosotchet',
    'arenda',
    'um',
    'bigData',
    'checkIndex',
  ]),
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['filled', 'outlined']),
  /**
   * Common color style
   */
  pseudoClass: PropTypes.oneOf(['hover', 'focus', 'active']),
  /**
   * AllButtons PseudoState
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * AllButtons contents
   */
  // label: PropTypes.string.isRequired,
  label: PropTypes.string,

  hover: PropTypes.bool,

  fullwidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

AllButtons.defaultProps = {
  backgroundColor: null,
  pseudoClass: 'focus',
  primary: false,
  size: 'medium',
  onClick: undefined,
};
