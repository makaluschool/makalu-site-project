import React, { useState } from 'react';
import { CircleX, CrossIcon, GanttChart, MenuIcon } from 'lucide-react';

const Drawerbtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="text-blue-800 hover:text-blue-600">
        <GanttChart className="w-10 h-10" />
      </button>
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      >
        <div
          className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            <button onClick={toggleDrawer} className="text-blue-800 hover:text-blue-600 float-right">
              <CircleX className="w-6 h-6" />
            </button>
            <div className="mt-8">
              <h2 className="text-lg font-semibold">Drawer Title</h2>
              <p className="text-sm text-gray-600">This is the drawer content.</p>
            </div>
            <div className="mt-auto p-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
              <button onClick={toggleDrawer} className="ml-2 border border-blue-600 text-blue-600 py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawerbtn;
