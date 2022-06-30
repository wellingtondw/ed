import { render } from '../../utils/test-utils';

import { Heading } from '.';

describe('<Heading />', () => {
  it('should render correctly', () => {
    const { container } = render(<Heading>Title Example</Heading>);

    expect(container).toMatchSnapshot();
  });
});
