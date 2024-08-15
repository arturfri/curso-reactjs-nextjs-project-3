import { screen } from '@testing-library/react';
import Home from './index.jsx';
import { renderTheme } from '../../styles/render-theme.js';
import { theme } from '../../styles/theme.js';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  debug();
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;
  expect(headingContainer).toHaveStyleRule('background', theme.colors.mainBg);
});
