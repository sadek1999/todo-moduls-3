
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FormEvent, useState } from "react";

const AddTodoModel = () => {
 const [task, setTask]=useState('')
 const [dis,setDis]=useState('')

 const onSubmit=(e:FormEvent)=>{
     e.preventDefault()
     console.log({task,dis})
 }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-primary-gradient  m-3">add Todo </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task </DialogTitle>
          <DialogDescription>
           Add task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task 
            </Label>
            <Input
              id="task"
              onBlur={(e)=>setTask(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
            Description
            </Label>
            <Input
              id="description"
             onBlur={(e)=>setDis(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex justify-end">

        
          <Button type="submit">Save changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModel;
