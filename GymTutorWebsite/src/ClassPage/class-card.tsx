
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type Class = {
  class_id: number;
  class_name: string;
  schedule: string;
  description: string;
 class_count: number;
 instructor_name:string;
};
async function handleClassUpdate(id: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/classes/${id}`, {
      method: 'PUT'
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to increment class count:', errorData.error);
      alert('Failed to increment class count: ' + errorData.error);
      return;
    }

    const data = await response.json();
    console.log('Class count incremented:', data);
    alert('Class count incremented successfully!');
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred.');
  }
}
export const ClassCard = ({ class_id, class_name, schedule, description, class_count,instructor_name }: Class) => {
  return (
    <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          
          <AvatarFallback>{instructor_name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-lg">{class_name} - {schedule}

          </CardTitle>
          <CardDescription></CardDescription>
          <CardDescription> {description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex space-x-36">
        <section className="w-1/2">
        <p>Instructor: {instructor_name}</p>
        <p>Enrollment Count: {class_count}</p>
        </section>
        <section>
        <Button onClick={() => handleClassUpdate(class_id)}> Join</Button>
        </section>
      </CardContent>
    </Card>
  );
};
