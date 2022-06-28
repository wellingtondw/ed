import { render, screen, waitFor } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Search } from '@styled-icons/material';

import { Input } from '.';

describe('<Input>', () => {
  it('should be able to render with placeholder', () => {
    render(<Input placeholder="example" />);

    expect(screen.getByPlaceholderText('example')).toBeInTheDocument();
  });

  it('should be able to render with icon on the left side by default', () => {
    render(<Input icon={<Search data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 0 });
  });

  it('should be able to render with icon on the left side', () => {
    render(<Input icon={<Search data-testid="icon" />} iconPosition="left" />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 0 });
  });

  it('should be able to render with icon on the right side', () => {
    render(<Input icon={<Search data-testid="icon" />} iconPosition="right" />);

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('should be able to change input value', async () => {
    const onInputChange = jest.fn();
    render(<Input onInputChange={onInputChange} name="Input" />);

    const input = screen.getByRole('textbox');
    const text = 'This is my example text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
    });
    expect(onInputChange).toHaveBeenCalledWith(text);
  });

  it('should not be able to change input value', async () => {
    const onInputChange = jest.fn();
    render(<Input onInputChange={onInputChange} name="Input" disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my example text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInputChange).not.toHaveBeenCalled();
  });

  it('should be able to accessible on press tab', () => {
    render(<Input name="Input" />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should not be able to accessible on press tab', () => {
    render(<Input name="Input" disabled />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
