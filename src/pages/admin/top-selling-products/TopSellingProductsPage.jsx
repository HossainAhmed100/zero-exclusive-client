import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
  Tooltip,
  Link
} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import {ChevronDownIcon} from "./ChevronDownIcon";
import {capitalize} from "./utils";
import { useQuery } from "@tanstack/react-query";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const columns = [
  {name: "Photo", uid: "thumbnail"},
  {name: "NAME", uid: "model"},
  {name: "Category", uid: "category"},
  {name: "Brand", uid: "brand"},
  {name: "Discount", uid: "discount", sortable: true},
  {name: "Rating", uid: "rating", sortable: true},
  {name: "Price", uid: "price", sortable: true},
  {name: "STATUS", uid: "instock"},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "In Stock", uid: "instock"},
  {name: "Out Stock", uid: "outstock"},
  {name: "Up Comming", uid: "comming"}
];

const statusColorMap = {
  no: "danger",
  yes: "success",
};

const INITIAL_VISIBLE_COLUMNS = ["thumbnail", "model", "category", "brand", "discount", "rating", "price", "instock", "actions"];

export default function TopSellingProductsPage() {
  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const axiosPublic = useAxiosPublic();
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "price",
    direction: "ascending",
  });
  
  const {data: productData = [], isLoading: isReportLoading, refetch} = useQuery({
    queryKey: ["productData"],
    queryFn: async()=>{
      const res = await axiosPublic.get("/products/0");
      return res.data;
    }
  })
  
  const handleDeleteReport = (id) => {
    console.log("🚀 ~ handleDeleteReport ~ id:", id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosPublic.delete(`/products/${id}`);
          console.log("🚀 ~ handleDelete ~ res:", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Item Deleted Successfully!",
              showConfirmButton: false,
              timer: 1500
            });
          }
        } catch (error) {
          console.error('Error deleting report:', error);
          Swal.fire({
            icon: "error",
            title: "Error deleting report",
            text: error.message,
            showConfirmButton: true
          });
        }
      }
    });
  };
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredproductData = [...productData];

    if (hasSearchFilter) {
      filteredproductData = filteredproductData.filter((item) =>
        item.model.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredproductData = filteredproductData.filter((item) =>
        Array.from(statusFilter).includes(item.status),
      );
    }

    return filteredproductData;
  }, [hasSearchFilter, filterValue, statusFilter, productData]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "thumbnail":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">
             <img className="w-6" src={cellValue} alt="Product Photo" /> 
            </p>
          </div>
        );
      case "model":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
          </div>
        );
      case "rating":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">${cellValue}</p>
          </div>
        );
      case "brand":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
          </div>
        );
      case "category":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
          </div>
        );
      case "discount":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">${cellValue}</p>
          </div>
        );
      case "price":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">${cellValue}</p>
          </div>
        );
      case "instock":
        return (
          <Chip className="capitalize" color={statusColorMap[cellValue ? "true" : "false"]} size="sm" variant="flat">
            {cellValue ? "in Stock" : "Out of Stock"}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
          <Tooltip content="Details">
            <Link href={`/all-products/${item?._id}`} color="foreground">
              <LuEye />
            </Link>
          </Tooltip>
          <Tooltip content="Edit">
            <Link href={`updateProduct/${item?._id}`} color="foreground">
              <BiEditAlt />
            </Link>
          </Tooltip>
          <Tooltip color="danger" content="Delete">
            <span onClick={() => handleDeleteReport(item?._id)} className="text-lg text-danger cursor-pointer active:opacity-50">
              <RiDeleteBinLine />
            </span>
          </Tooltip>
        </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by Style name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button as={Link} href="/addNewProduct" color="primary" endContent={<FiPlus />}>
              Add New Product
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {productData.length} Project</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    onSearchChange,
    onClear,
    productData
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [page, onPreviousPage, onNextPage, pages]);

  return (
    <>
    <Helmet title='Manage All Product | Admin - Dashbaord | Zephyra Online Shop '/>
    <Table
    aria-label="Example table with custom cells, pagination and sorting"
    isHeaderSticky
    bottomContent={bottomContent}
    bottomContentPlacement="outside"
    sortDescriptor={sortDescriptor}
    topContent={topContent}
    topContentPlacement="outside"
    onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody isLoading={isReportLoading} emptyContent={"No productData found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </>
  );
}
