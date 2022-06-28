import styled from '@emotion/styled';
import { css, keyframes, Theme } from '@emotion/react';
import { Button123 } from './Button';
// import {
//   ColorTypes,
//   ColorVariantTypes,
// } from '../../../../types/themeTypes';
// import PropTypes from 'prop-types';

const setColor =
  (
    variant: ['filled', 'outlined', 'borderless', 'switch'],
    type:
      | ['main', 'middle', 'hover', 'light', 'pale', 'dark']
      | 'main',
  ) =>
  ({ theme }: { theme: Theme }) =>
    theme.colors.site[variant][type];

const sliding = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 0;
  }
`;

const switchedOn = (
  theme: Theme,
  variant: ['filled', 'outlined', 'borderless', 'switch'],
  type: ['main', 'middle', 'hover', 'light', 'pale', 'dark'],
) => css`
  border: 1px solid ${theme.colors.lightGray};
  background-color: ${theme.colors.backgroundGray};
  box-shadow: ${theme.shadows.inner.light};
  color: ${setColor(variant, type)({ theme })};
  &:hover {
    border-color: ${theme.colors.site[variant][type]};
  }
`;

const switchedOff = (
  theme: Theme,
  variant: ['filled', 'outlined', 'borderless', 'switch'],
  type: ['main', 'middle', 'hover', 'light', 'pale', 'dark'],
) => css`
  border: 1px solid ${theme.colors.backgroundGray};
  background-color: ${theme.colors.baseWhite};
  box-shadow: ${theme.shadows.outer.light};
  color: ${setColor(variant, type)({ theme })};
  &:hover {
    border-color: ${theme.colors.site[variant][type]};
  }
`;

const filledButton = (
  theme: Theme,
  variant: ['filled', 'outlined', 'borderless', 'switch'],
) => css`
  color: ${theme.colors.baseWhite};
  border: 1px solid ${theme.colors.site[variant].middle};
  background-color: ${theme.colors.site[variant].main};
  box-shadow: ${theme.shadows.inner.lightMiddle},
    ${theme.shadows.outer.primaryColor};
  &:hover {
    background-color: ${theme.colors.site[variant].hover};
    box-shadow: ${theme.shadows.outer.primaryColor},
      ${theme.shadows.inner.lightMiddle};
  }
  &:active {
    background-color: ${theme.colors.site[variant].middle};
    box-shadow: ${theme.shadows.inner.lightActive};
  }
`;

const outlinedButton = (
  theme: Theme,
  variant: ['filled', 'outlined', 'borderless', 'switch'],
) => css`
  border: 1px solid ${theme.colors.site[variant].main};
  color: ${theme.colors.site[variant].main};

  &:hover {
    color: ${theme.colors.site[variant].middle};
    border-color: ${theme.colors.site[variant].middle};
    box-shadow: ${theme.shadows.outer.light};
  }

  &:active {
    color: ${theme.colors.site[variant].middle};
    border-color: ${theme.colors.site[variant].middle};
    box-shadow: ${theme.shadows.inner.lightHover};
  }
`;

const loadingButton = (
  theme: Theme,
  variant: ['filled', 'outlined', 'borderless', 'switch'],
) => css`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background-color: ${theme.colors.site[variant].main};
    background-image: url("data:image/svg+xml,%3Csvg width='210' height='59' viewBox='0 0 210 59' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='210' height='59'%3E%3Crect width='210' height='59' fill='%23C4C4C4'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3Cg opacity='0.3' filter='url(%23filter0_d)'%3E%3Cpath d='M-42 0H-18L32 59H8L-42 0Z' fill='white'/%3E%3C/g%3E%3Cg opacity='0.3' filter='url(%23filter1_d)'%3E%3Cpath d='M0 0H24L74 59H50L0 0Z' fill='white'/%3E%3C/g%3E%3Cg opacity='0.3' filter='url(%23filter2_d)'%3E%3Cpath d='M42 0H66L116 59H92L42 0Z' fill='white'/%3E%3C/g%3E%3Cg opacity='0.3' filter='url(%23filter3_d)'%3E%3Cpath d='M84 0H108L158 59H134L84 0Z' fill='white'/%3E%3C/g%3E%3Cg opacity='0.3' filter='url(%23filter4_d)'%3E%3Cpath d='M126 0H150L200 59H176L126 0Z' fill='white'/%3E%3C/g%3E%3Cg opacity='0.3' filter='url(%23filter5_d)'%3E%3Cpath d='M168 0H192L242 59H218L168 0Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='-46' y='-2' width='82' height='67' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter1_d' x='-4' y='-2' width='82' height='67' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter2_d' x='38' y='-2' width='82' height='67' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter3_d' x='80' y='-2' width='82' height='67' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter4_d' x='122' y='-2' width='82' height='67' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter5_d' x='164' y='-2' width='82' height='67' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
    background-position: -100%;
    color: ${theme.colors.site[variant].main};
    background-repeat: repeat-x;
    animation: ${sliding} 120s linear infinite;
    will-change: background-position;
    transform: translate3d(0, 0, 0);
  }
`;

export const Button1234 = styled.button`
  min-width: 64px;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  padding: ${(props) => props.theme.space[1]}px;
  justify-content: center;
  background-color: transparent;
  outline: 0;
  font-size: ${(props) => props.theme.fontSizes[4]}px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  color: ${({ theme }) => theme.colors.site.primary.main};
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadows.outer.light};
  transition: background-color 250ms ease-out,
    box-shadow ease-out 250ms, border-color ease-out 250ms,
    color ease-out 250ms;
  &:focus {
    box-shadow: 0 0 0 2px
      ${({ theme }) => theme.colors.site.info.main};
  }
  &:hover {
    border-color: ${({ color, theme }) =>
      !color && theme.colors.site.primary.main};
    color: ${({ color, theme }) =>
      !color && theme.colors.site.primary.hover};
    box-shadow: ${({ theme }) => theme.shadows.outer.lightHover};
  }
  &:active {
    transition: 0s;
    box-shadow: ${({ theme }) => theme.shadows.inner.lightHover};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
  ${({ fullwidth }) =>
    fullwidth &&
    css`
      width: 100%;
    `}
  ${({ size, theme }) => {
    if (size === 'small') {
      return css`
        height: 32px;
        padding-left: ${theme.space[2]}px;
        padding-right: ${theme.space[2]}px;
      `;
    }
    if (size === 'large') {
      return css`
        height: 48px;
        padding-left: ${theme.space[3]}px;
        padding-right: ${theme.space[3]}px;
      `;
    }
  }};
  ${({ variant, color, theme, switchOn }) => {
    if (variant === 'filled') {
      return css`
        ${filledButton(theme, color || 'primary')}
      `;
    }
    if (variant === 'outlined') {
      return css`
        ${outlinedButton(theme, color || 'primary')}
      `;
    }
    if (variant === 'switch') {
      return switchOn
        ? switchedOn(theme, color || 'primary', 'main')
        : switchedOff(theme, color || 'primary', 'main');
    }
  }};
  ${({ isLoading, theme, color }) => {
    if (isLoading) {
      return css`
        ${loadingButton(theme, color || 'primary')};
        pointer-events: none;
      `;
    }
  }}
`;
