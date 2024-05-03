import Link from "next/link";

const Success = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="flex min-h-[70vh] p-4 items-center text-center">
        <div className="my-auto">
          <h1 className="p-4 text-5xl font-bold">Success!</h1>
          <span className="text-lg">Transactions were succesful</span>
          <br />
          <Link
            className="bg-white border-2 border-black text-black px-5 py-3 rounded-lg inline-block mt-5"
            href="/"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
