import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className={cn("text-white", "hover:text-gray-400")}>
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/add" className={cn("text-white", "hover:text-gray-400")}>
            <Button variant="ghost">Add </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
