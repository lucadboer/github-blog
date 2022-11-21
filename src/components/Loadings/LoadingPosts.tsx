export function LoadingPosts() {
  return (
    <div className="shadow bg-basePost h-32 rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-3 bg-baseSpan rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-3 bg-baseSpan rounded col-span-2"></div>
              <div className="h-3 bg-baseSpan rounded col-span-1"></div>
            </div>
            <div className="h-3 bg-baseSpan rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
