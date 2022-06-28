import { render, screen, fireEvent } from '../../utils/test-utils';

import { Pagination } from '.';

const onPageChange = jest.fn();

type SutProps = {
  totalCount: number;
  registerPerPage: number;
  currentPage: number;
};

const sut = ({ totalCount = 200, registerPerPage = 20, currentPage }: SutProps) => {
  return render(
    <Pagination
      totalCount={totalCount}
      registerPerPage={registerPerPage}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
};

describe('<MovieCardList />', () => {
  it('should be able to render correctly current page is not passed', () => {
    sut({} as SutProps);

    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getAllByText('. . .')).toHaveLength(1);
  });

  it('should be able to render correctly if has more one space between current item and first or last page item', () => {
    sut({ currentPage: 5 } as SutProps);

    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText(7)).toBeInTheDocument();
    expect(screen.getByText(6)).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getAllByText('. . .')).toHaveLength(2);
  });

  it('should not be able to render with previous page siblings if first page and current page between space is < 2', () => {
    sut({ currentPage: 2 } as SutProps);

    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getAllByText('. . .')).toHaveLength(1);
  });

  it('should not be able to render with next page siblings if last page and current page between space is < 2', () => {
    sut({ currentPage: 8 } as SutProps);

    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText(9)).toBeInTheDocument();
    expect(screen.getByText(8)).toBeInTheDocument();
    expect(screen.getByText(7)).toBeInTheDocument();
    expect(screen.getByText(6)).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getAllByText('. . .')).toHaveLength(1);
  });

  it('should be able to click in pagination item', () => {
    sut({ currentPage: 8 } as SutProps);

    const paginationItemEl = screen.getByText(7);

    fireEvent.click(paginationItemEl);

    expect(onPageChange).toHaveBeenCalledWith(7);
  });
});
