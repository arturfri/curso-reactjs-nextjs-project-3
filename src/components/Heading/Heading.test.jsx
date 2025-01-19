import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme.js';
import { Heading } from '.';
import { theme } from '../../styles/theme.js';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    // debug();
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>);
    // debug();
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Texto</Heading>);
    // debug();
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">Texto</Heading>);
    // debug();
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.large, {
      media: theme.media.lteMedium.replace(' ', '  '), // fix for this issue https://github.com/styled-components/jest-styled-components/issues/430
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Texto</Heading>);
    // debug();
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    // debug();
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
