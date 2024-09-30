import { Menu } from 'lucide-react';

const Title = ()=> {
    return <div className="flex justify-between items-center mb-4">
    <Menu className="text-gray-700" />
    <h1 className="text-4xl font-bold text-center flex-grow">PERSPECTIFY</h1>
    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
  </div>
}

export default Title;