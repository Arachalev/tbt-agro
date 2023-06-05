import { TraceSpinner } from "react-spinners-kit";

import { useRouter } from "next/navigation";

const StatusModal = ({
  error,
  data,
  onClose,
  loading,
  loadingText,
}: {
  error?: string;
  data?: string;
  onClose: () => void;
  loading: boolean;
  loadingText?: string;
}) => {
  const router = useRouter();
  // {
  //   data && router.push("/dashboard/account");
  // }

  return (
    <div
      // onClick={(e) => {
      //   e.stopPropagation();
      // }}
      onClick={() => onClose()}
      className="absolute top-0 right-0 bg-agro-yellow/70 z-[10000] w-full h-full flex items-center justify-center"
    >
      {error && (
        <div className="bg-white p-8 rounded-xl flex flex-col items-center gap-8 ">
          <p className="text-center text-red-500">
            {error ? error : "There has been an error creating an account."}
          </p>
          <button
            onClick={onClose}
            className="text-black bg-agro-yellow font-semibold bg-btn-blue  w-full sm:w-fit sm:px-20 py-3 rounded-3xl"
          >
            close
          </button>
        </div>
      )}
      {loading && (
        <div className="flex flex-col gap-4 items-center">
          <TraceSpinner frontColor="#ffff" size={50} />
          <p className="text-black text-2xl">Loading...</p>
        </div>
      )}
      {data && (
        <div className="bg-white p-8 rounded-xl flex flex-col items-center gap-8 ">
          <p className="text-center"> {data}</p>
          <button
            className="text-black bg-agro-yellow font-semibold bg-btn-blue  w-full sm:w-fit sm:px-20 py-3 rounded-3xl"
            onClick={() => router.push("/dashboard/buyer/account")}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default StatusModal;
