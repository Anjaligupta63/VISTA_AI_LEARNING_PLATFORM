import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import GoalsCard from "@/components/dashboard/GoalsCard";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <DashboardHeader />

        <div className="p-8 space-y-8">

          <StatsCards />

          <ContinueLearning />

          <div className="grid lg:grid-cols-2 gap-6">

            <GoalsCard />

            <RecentActivity />

          </div>

        </div>

      </div>

    </div>
  );
}