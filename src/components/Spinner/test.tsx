import { render } from 'utils/test-utils';
import { Spinner } from '.';

describe('<Spinner />', () => {
  it('should be able to render correctly', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
