const Template = () => {
  return (
    <div>
      <div className="w-full bg-blue-200 sticky top-0">Navbar</div>
      <div className="w-full bg-yellow-200 sticky top-6">ButtonBar</div>
      <div className="flex">
        <div className="bg-red-200 h-screen w-2/12 fixed top-12">Sidebar</div>
        <div className="bg-green-200 h-screen w-10/12 ml-64">Mainbar</div>
      </div>
    </div>
  );
};

export default Template;
