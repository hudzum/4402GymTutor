
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  membership: z.enum(["Basic", "Premium", "VIP"], {
    required_error: "You need to select a Membership type.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
})

export function MemberForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
        },
    })
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(JSON.stringify(values))
          const response = await fetch('http://localhost:3000/api/members', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          
          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error creating member:', errorData.error);
            alert('Failed to create member: ' + errorData.error);
            return;
          }
      
          const data = await response.json();
          console.log('Member created:', data);
          alert('Member created successfully!');
        } catch (error) {
          console.error('Error:', error);
          alert('An unexpected error occurred.');
        }
      }

  return (
    <Card className ="px-10 py-2">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        {/* Username Field */}
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />

        {/* Last Name Field */}
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder=" Doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
            
          )}
        />
         {/* Radio  Field */}
         <FormField
          control={form.control}
          name="membership"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select a Membership</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Basic" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Basic
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Premium" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Premium
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="VIP" />
                    </FormControl>
                    <FormLabel className="font-normal">VIP</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="youremail@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(123) 456-7890" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your Contact Information with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

      
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </Card>
  )
}
