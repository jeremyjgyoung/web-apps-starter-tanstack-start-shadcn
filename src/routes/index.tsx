import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Toaster, toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null]
  >([null, null]);

  const handleSonnerDemo = () => {
    toast.success("Action was successful!");
  };

  return (
    <div className="space-y-12 p-8 bg-gray-50">
      {/* Accordion Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Accordion</h2>
        <div className="w-full max-w-md mx-auto p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                components’ aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Calendar Demo Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Calendar Demo</h2>
        <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
          {/* Single Date Selection */}
          <div className="border p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">
              Single Date Selection
            </h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
          {/* Date Range Selection */}
          <div className="border p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Date Range Selection</h3>
            <Calendar
              mode="range"
              selected={selectedRange}
              onSelect={setSelectedRange}
            />
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Card</h2>
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Demo Card</CardTitle>
            </CardHeader>
            <CardContent>
              This is an example of a card component from shadcn.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dialog Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Dialog</h2>
        <div className="flex justify-center">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a description inside the dialog.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex justify-end">
                <DialogClose asChild>
                  <Button
                    variant="secondary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Close
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Dropdown Menu Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Dropdown Menu</h2>
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Form Input Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Form Input</h2>
        <div className="w-full max-w-md mx-auto space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <Button>Submit</Button>
        </div>
      </section>

      {/* Sonner Toast Demo Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sonner Toast Demo
        </h2>
        <div className="flex justify-center">
          <Button onClick={handleSonnerDemo}>Show Toast</Button>
        </div>
      </section>

      {/* Tabs Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Tabs</h2>
        <div className="w-full max-w-md mx-auto">
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>This is the content for Tab 1.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>This is the content for Tab 2.</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sonner Toaster Container */}
      <Toaster />
    </div>
  );
}

export default App;
