import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { DisplayErrorProps } from "./Display.type";

export function DisplayNoData() {
  return (
    <div className="flex flex-row justify-center items-center rounded-lg bg-black bg-opacity-50 p-8 text-gray-300">
      <InformationCircleIcon className="size-8 mr-2" />
      Data Not Found
    </div>
  );
}

export function DisplayError({ onReload }: DisplayErrorProps) {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-red-400 bg-opacity-50 p-8 text-gray-300">
      <div className="flex flex-row items-center gap-2 text-center">
        <InformationCircleIcon className="size-8" />
        Something went wrong
      </div>
      {onReload && (
        <button
          onClick={onReload}
          className="mt-4 py-2 px-4 bg-red-300 text-gray-900 rounded-lg"
        >
          Reload
        </button>
      )}
    </div>
  );
}
