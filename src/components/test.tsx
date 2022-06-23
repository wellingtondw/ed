import { render, screen } from '@testing-library/react';
import { Example } from './example';

describe('<Example />', () => {
  it('should be able to render correctly', () => {
    render(<Example />);

    expect(screen.getByText(/somente/i)).toBeInTheDocument();
  });
});
