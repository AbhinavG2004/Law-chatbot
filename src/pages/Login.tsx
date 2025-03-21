import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Gavel } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/hooks/useTheme';
import { toast } from 'sonner';
const loginSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: 'Please enter a valid Indian phone number (10 digits starting with 6-9).'
  })
});
type LoginFormValues = z.infer<typeof loginSchema>;
const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    theme
  } = useTheme();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });
  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    // Store user data or create token
    localStorage.setItem('user', JSON.stringify(data));
    toast.success('Login successful!');
    // Force navigation to the main page
    navigate('/', {
      replace: true
    });
  };
  return <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 md:p-8 mx-0 px-[32px]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center md:justify-start mb-4">
            <div className="relative">
              <Gavel className="h-20 w-20 text-primary" />
              <div className="absolute bottom-0 w-full text-center px-0 my-0 py-0 mx-[30px]">
                <span className="text-sm uppercase tracking-widest font-semibold">Law</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tighter mb-1">2025 Smart Analyser</h1>
          <p className="text-muted-foreground">Indian Legal AI Assistant</p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your details to access legal assistance
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Rahul Sharma" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="phone" render={({
                field
              }) => <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <Button type="submit" className="w-full">
                  Continue
                </Button>
              </form>
            </Form>
          </CardContent>
          
          <CardFooter className="flex justify-center border-t py-4">
            <p className="text-xs text-center text-muted-foreground">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Smart Analyser. All rights reserved.
          </p>
        </div>
      </div>
    </div>;
};
export default Login;