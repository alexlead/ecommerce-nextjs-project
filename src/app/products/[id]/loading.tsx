export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="aspect-square bg-slate-200 rounded-3xl" />
                <div className="space-y-6">
                    <div className="h-10 bg-slate-200 rounded-xl w-3/4" />
                    <div className="h-6 bg-slate-200 rounded-xl w-1/4" />
                    <div className="h-32 bg-slate-200 rounded-2xl w-full" />
                    <div className="h-16 bg-slate-200 rounded-xl w-full" />
                </div>
            </div>
        </div>
    );
}