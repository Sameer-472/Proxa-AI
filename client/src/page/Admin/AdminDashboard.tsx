import { useGetAllUsers } from "@/api/authApi";
import { Card, CardContent } from "@/components/ui/card";
import { Users2, BarChart2, Settings } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminDashboard() {
  const allUsers = useGetAllUsers();

  return (
    <div className="p-6 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold ">Admin Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to the admin dashboard. Manage users, view analytics, and
          perform administrative tasks with ease.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Total Users */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex items-center p-6">
            <Users2 className="h-10 w-10 text-blue-500 mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-black">Total Users</h2>
              <p className="text-3xl font-bold text-black">{allUsers.data?.length || 0}</p>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Analytics Overview */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex items-center p-6">
            <BarChart2 className="h-10 w-10 text-green-500 mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Analytics</h2>
              <p className="text-3xl font-bold text-gray-900">1,245</p>
              <p className="text-sm text-gray-500">Page views this month</p>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Admin Tasks */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex items-center p-6">
            <Settings className="h-10 w-10 text-purple-500 mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                Pending Tasks
              </h2>
              <p className="text-3xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-500">Tasks awaiting approval</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">All Users</h2>
          <p className="text-gray-600 mb-6">
            Below is a list of all registered users in the system.
          </p>
        </div>
        <Table>
          <TableCaption>A list of all users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">User Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allUsers.data?.map((user) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{user._id}</TableCell>
                <TableCell>{user.firstName} {user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
