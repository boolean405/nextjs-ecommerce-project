import prismadb from "@/lib/prismadb";
import { SizeForm } from "./components/size-form";

const BillboardPage = async ({
  params,
}: {
  params: Promise<{ sizeId: string }>;
}) => {
  let size = null;
  const { sizeId } = await params;

  if (sizeId != "new") {
    size = await prismadb.size.findUnique({
      where: {
        id: sizeId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default BillboardPage;
