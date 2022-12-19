import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    disableFilters: true,
    sticky: "left"
  },
  {
    Header: "Title",
    Footer: "Title",
    accessor: "title",
    sticky: "left"
  },
  {
    Header: "Description",
    Footer: "Description",
    accessor: "description",
    sticky: "left",
    disableSortBy: true
  },
  {
    Header: "Created At",
    Footer: "Created At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    }
  },
  {
    Header: "Link",
    Footer: "Link",
    accessor: "link",
    disableSortBy: true
  }
];
