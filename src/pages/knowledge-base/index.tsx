import { UploadPdfDialog } from "@/components/widget/knowledge_base/upload_pdf_dialog";
import { KnowledgeBaseService } from "@/lib/services/knowledge_base_service";
import { Search, Trash2 } from "lucide-react";

import { useEffect, useState } from "react";

export default function KnowledgeBasePage() {
  const [filenameList, setFilenameList] = useState<string[]>([]);
  const [reload, setReload] = useState(true);

  const getAllFileList = async () => {
    const filenameListResult = await KnowledgeBaseService.getFileList();

    setFilenameList(filenameListResult);
  };

  useEffect(() => {
    if (reload) {
      getAllFileList()
      setReload(false);
    }
  }, [reload]);

  return (
    <section className="px-4">
      <div className="w-full flex justify-center">
        <div className="max-w-[800px] w-full flex flex-col gap-2">
          <div className="w-full flex gap-2 items-center">
            <div className="bg-neutral-800 rounded-md py-2 pl-2 pr-4 flex items-center gap-2 w-full">
              <Search className="w-4 h-4" />
              <input className="outline-none w-full text-base"></input>
            </div>
            <UploadPdfDialog setReload={setReload}/>
          </div>
          <div></div>
          {filenameList.map((value, index) => {
            return (
              <div className="bg-neutral-800 rounded-md px-4 py-2 flex justify-between items-center" key={`file_container_${index}`}>
                <div>{value}</div>
                <Trash2 className="stroke-red-400 w-4 cursor-pointer" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
