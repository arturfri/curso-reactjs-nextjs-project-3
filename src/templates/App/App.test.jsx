import Home from './index.jsx';
import { renderTheme } from '../../styles/render-theme.js';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
