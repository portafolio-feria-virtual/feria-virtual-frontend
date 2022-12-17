export const Badge = ({ status }: { status: boolean }) => {
  return (
    <div className="flex items-center">
      {status ? (
        <div className="w-2 h-2 mr-2 rounded-full bg-green-500" />
      ) : (
        <div className="w-2 h-2 mr-2 rounded-full bg-red-500" />
      )}

      <span>{status ? 'Si' : 'No'}</span>
    </div>
  );
};  
