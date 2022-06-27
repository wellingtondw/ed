type GetFullYearParams = {
  date: string | Date;
};
export const getFullYear = ({ date }: GetFullYearParams) => {
  return new Date(date).getFullYear();
};
