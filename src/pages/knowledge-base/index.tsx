import { Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function KnowledgeBasePage() {
  const [filenameList, setFilenameList] = useState<string[]>([]);
  const [pdfName, setPdfName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    fetch("/api/file", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result: FileResultType) => {
        setFilenameList(result.filenameList);
      });
  }, []);

  const _renderAddPdfDialog = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-xs whitespace-nowrap text-center"
          >
            Add PDF
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload PDF</DialogTitle>
            <DialogDescription>
              Choose a PDF file and give it a name.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={() => {}} className="space-y-4">
            {/* Name input */}
            <div className="grid gap-2">
              <Label htmlFor="pdfName">PDF Name</Label>
              <Input
                id="pdfName"
                type="text"
                placeholder="Enter PDF name"
                value={pdfName}
                onChange={(e) => setPdfName(e.target.value)}
                required
              />
            </div>

            {/* File input */}
            <div className="grid gap-2">
              <Label htmlFor="pdfFile">Upload PDF</Label>
              <Input
                id="pdfFile"
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
              />
            </div>

            <DialogFooter>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <section className="px-4">
      <div className="w-full flex justify-center">
        <div className="max-w-[800px] w-full flex flex-col gap-2">
          <div className="w-full flex gap-2 items-center">
            <div className="bg-neutral-800 rounded-md py-2 pl-2 pr-4 flex items-center gap-2 w-full">
              <Search className="w-4 h-4" />
              <input className="outline-none w-full text-base"></input>
            </div>
            {_renderAddPdfDialog()}
          </div>
          <div></div>
          {filenameList.map((value) => {
            return (
              <div className="bg-neutral-800 rounded-md px-4 py-2 flex justify-between items-center">
                <div>{value}</div>
                <Trash2 className="stroke-red-400 w-4" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
