import { render } from 'utils/test-utils';
import { Header } from '.';

describe('<Header />', () => {
  it('Should be able to render correctly', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
