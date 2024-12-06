import { Member, columns } from "./dash-columns"
import { DataTable } from "./dashboard"
import { useState, useEffect } from "react";
async function getData(): Promise<Member[]> {
    const response = await fetch("http://localhost:3000/api/members");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  }

export default function DemoPage() {
  const [data, setData] = useState<Member[]>([])
  useEffect(() => {
    getData().then((data) => setData(data));
  }, [])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
