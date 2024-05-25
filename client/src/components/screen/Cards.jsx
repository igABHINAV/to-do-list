import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '../ui/button';
import { ArrowBigRight, Trash } from 'lucide-react';
import UpdateForm from './UpdateForm';

const Cards = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched tasks:', data);
                if (Array.isArray(data)) {
                    setTasks(data);
                } else {
                    console.error('Unexpected data format:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setTasks(tasks.filter(task => task._id !== id));
                alert("Task deleted!");
            } else {
                console.error('Error deleting task:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleUpdate = (updatedTask) => {
        setTasks(tasks.map(task => (task._id === updatedTask._id ? updatedTask : task)));
        alert("Task updated!");
    };

    return (
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            {Array.isArray(tasks) && tasks.length > 0 ? tasks.map((task, index) => (
                <Sheet key={index}>
                    <Card className='w-[200px] h-[250px] flex flex-col items-center justify-center'>
                        <SheetTrigger>
                            <CardHeader>
                                <CardTitle>{task.title}</CardTitle>
                                <CardDescription>{task.description}</CardDescription>
                            </CardHeader>
                        </SheetTrigger>
                        <CardFooter>
                            <Button onClick={() => handleDelete(task._id)}><Trash /></Button>
                        </CardFooter>
                    </Card>

                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>{task.title}</SheetTitle>
                            <SheetDescription>
                                {task.description}
                            </SheetDescription>
                            <p>Status: {task.status}</p>
                            <p>Due Date: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</p>
                        </SheetHeader>
                        <br />
                        <div className='flex items-center justify-center'>
                            <UpdateForm task={task} onUpdate={handleUpdate} />
                        </div>
                    </SheetContent>
                </Sheet>
            )) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}

export default Cards;
