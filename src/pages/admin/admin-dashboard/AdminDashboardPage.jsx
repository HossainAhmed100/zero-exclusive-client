import { Button, Card, CardBody, CardHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Link } from "@nextui-org/react"
import { Helmet } from "react-helmet-async"
import ColumnChart from "../../../components/charts/ColumnChart"
import LineChart from "../../../components/charts/LineChart"

export default function AdminDashboardPage() {

  return (
    <div>
      <Helmet title="Admin - Dashbaord | Zephyra Online Shop"/>
      <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="shadow-none border-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">Total Users</span>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardBody>
              <div className="text-2xl font-bold">12,345</div>
              <p className="text-xs text-muted-foreground">+5.2% from last month</p>
            </CardBody>
          </Card>
          <Card className="shadow-none border-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">Total Orders</span>
              <ShoppingCartIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardBody>
              <div className="text-2xl font-bold">3,456</div>
              <p className="text-xs text-muted-foreground">+8.1% from last month</p>
            </CardBody>
          </Card>
          <Card className="shadow-none border-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">Total Revenue</span>
              <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardBody>
              <div className="text-2xl font-bold">$125,678</div>
              <p className="text-xs text-muted-foreground">+12.4% from last month</p>
            </CardBody>
          </Card>
          <Card className="shadow-none border-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">Products in Stock</span>
              <PackageIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardBody>
              <div className="text-2xl font-bold">2,987</div>
              <p className="text-xs text-muted-foreground">-1.2% from last month</p>
            </CardBody>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <ColumnChart />
          <LineChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="h-fit rounded-md shadow-none border-1">
            <CardHeader className="flex px-6 flex-row items-center justify-between pb-2">
              <div className="flex items-center justify-normal gap-1">
              <PackageIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Top Selling Products</span>
              </div>
              <Button color="primary" variant="light">View all</Button>
            </CardHeader>
            <CardBody>
              <Table  removeWrapper className="px-2" aria-label="Top Selling Products Tables">
                <TableHeader>
                  <TableColumn>Product</TableColumn>
                  <TableColumn>ID</TableColumn>
                  <TableColumn>Units Sold</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Acme T-Shirt</TableCell>
                    <TableCell>PRD-001</TableCell>
                    <TableCell>1,234</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Acme Hoodie</TableCell>
                    <TableCell>PRD-002</TableCell>
                    <TableCell>987</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Acme Jeans</TableCell>
                    <TableCell>PRD-003</TableCell>
                    <TableCell>765</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Acme Sneakers</TableCell>
                    <TableCell>PRD-004</TableCell>
                    <TableCell>543</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Acme Backpack</TableCell>
                    <TableCell>PRD-005</TableCell>
                    <TableCell>321</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          
          <Card className="h-fit rounded-md  shadow-none border-1">
            <CardHeader className="flex px-6 flex-row items-center justify-between pb-2">
              <div className="flex items-center justify-normal gap-1">
              <PackageIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Recents Orders</span>
              </div>
                <Button href={"topSelingProducts"} as={Link} color="primary" variant="light">View all</Button>
            </CardHeader>
            <CardBody>
              <Table removeWrapper aria-labelledby="Recent Ordesrs" className="px-2">
                <TableHeader>
                  <TableColumn>Order ID</TableColumn>
                  <TableColumn>User ID</TableColumn>
                  <TableColumn>Total</TableColumn>
                  <TableColumn>Status</TableColumn>
                  <TableColumn>Date</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>ORD-001</TableCell>
                    <TableCell>USR-001</TableCell>
                    <TableCell>$99.99</TableCell>
                    <TableCell>Shipped</TableCell>
                    <TableCell>2023-04-15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-002</TableCell>
                    <TableCell>USR-002</TableCell>
                    <TableCell>$49.99</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>2023-04-12</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-003</TableCell>
                    <TableCell>USR-003</TableCell>
                    <TableCell>$74.99</TableCell>
                    <TableCell>Shipped</TableCell>
                    <TableCell>2023-04-10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-004</TableCell>
                    <TableCell>USR-004</TableCell>
                    <TableCell>$29.99</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>2023-04-08</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-005</TableCell>
                    <TableCell>USR-005</TableCell>
                    <TableCell>$59.99</TableCell>
                    <TableCell>Shipped</TableCell>
                    <TableCell>2023-04-05</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="h-fit rounded-md  shadow-none border-1">
            <CardHeader className="flex flex-row px-6 items-center justify-between pb-2">
              <span className="text-sm font-medium">Pending Orders</span>
              <ShoppingCartIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardBody>
              <Table removeWrapper aria-labelledby="Pending Ordesrs Tables" className="px-2">
                <TableHeader>
                  <TableColumn>Order ID</TableColumn>
                  <TableColumn>User ID</TableColumn>
                  <TableColumn>Total</TableColumn>
                  <TableColumn>Status</TableColumn>
                  <TableColumn>Date</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>ORD-001</TableCell>
                    <TableCell>USR-001</TableCell>
                    <TableCell>$99.99</TableCell>
                    <TableCell>Shipped</TableCell>
                    <TableCell>2023-04-15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-002</TableCell>
                    <TableCell>USR-002</TableCell>
                    <TableCell>$49.99</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>2023-04-12</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-003</TableCell>
                    <TableCell>USR-003</TableCell>
                    <TableCell>$74.99</TableCell>
                    <TableCell>Shipped</TableCell>
                    <TableCell>2023-04-10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-004</TableCell>
                    <TableCell>USR-004</TableCell>
                    <TableCell>$29.99</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>2023-04-08</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-005</TableCell>
                    <TableCell>USR-005</TableCell>
                    <TableCell>$59.99</TableCell>
                    <TableCell>Shipped</TableCell>
                    <TableCell>2023-04-05</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          <Card className="h-fit rounded-md  shadow-none border-1">
            <CardHeader className="flex px-6 flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">Sales by Category</span>
              <PackageIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardBody>
              <Table removeWrapper className="px-2" aria-label="Sales Bu Category Tables">
                <TableHeader>
                  <TableColumn>Category</TableColumn>
                  <TableColumn>ID</TableColumn>
                  <TableColumn>Total Sales</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Apparel</TableCell>
                    <TableCell>CAT-001</TableCell>
                    <TableCell>$45,678</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Accessories</TableCell>
                    <TableCell>CAT-002</TableCell>
                    <TableCell>$23,456</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Electronics</TableCell>
                    <TableCell>CAT-003</TableCell>
                    <TableCell>$67,890</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Home Goods</TableCell>
                    <TableCell>CAT-004</TableCell>
                    <TableCell>$12,345</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Outdoor</TableCell>
                    <TableCell>CAT-005</TableCell>
                    <TableCell>$9,876</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </main>
    </div>
    </div>
  )
}


function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}
function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
