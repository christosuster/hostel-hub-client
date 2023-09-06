export default function DashboardItem({ first, second, color }) {
  return (
    <div className={`flex items-center flex-col my-1 text-${color}-500`}>
      <h1 className={`text-xs text-gray-500`}>{first}</h1>
      <h1 className="text-lg">{second}</h1>
    </div>
  );
}
