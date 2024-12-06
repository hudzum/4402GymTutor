import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Member = {
  id: number
  name: string
  email: string
  phone_number: string
  plan_type: string
}

async function handleDelete(id : number){
  try{
  const response = await fetch(`http://localhost:3000/api/members/${id}`,
    {
      method: 'DELETE'
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error Failed to Delete member:', errorData.error);
      alert('Failed to Delete member: ' + errorData.error);
      return;
    }
    
    const data = await response.json();
    console.log('Member Deleted:', data);
    alert('Member Deleted successfully!');
  }
  catch(error){
    console.error('Error:', error);
    alert('An unexpected error occurred.');
  }
}

export const columns: ColumnDef<Member>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const member = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(member.email)}
            >
              Copy Member Email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            onClick={() => handleDelete(member.id)}
            >Delete Member
            </DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "plan_type",
    header: "Plan",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
]
