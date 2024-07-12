import GlassPlayer from "@/app/ui/dashboard/glass-player";

export default function Page() {
    return (
        <div className="flex items-center justify-center fixed inset-0">
            <div className="w-64 mt-20">
                <GlassPlayer shadow={false}/>
            </div>
        </div>
    );
}
