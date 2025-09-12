import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { KnowledgeBaseService } from "@/lib/services/knowledge_base_service";

type UploadPdfDialogProps = {
  setReload: Function;
};

function UploadPdfDialog({ setReload }: UploadPdfDialogProps) {
  const [pdfName, setPdfName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    await KnowledgeBaseService.uploadFile({ file: file });

    setLoading(false);
    setReload(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-xs whitespace-nowrap text-center"
          onClick={()=>{}}
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

        <form onSubmit={handleSubmit} className="space-y-4">
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
            <DialogClose asChild>
              <Button type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Confirm"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { UploadPdfDialog };
