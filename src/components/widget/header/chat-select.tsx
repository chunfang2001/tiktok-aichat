import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ChatSelectProps = {
  filenameList: string[];
  onSelectFile: (filename: string) => void;
};

export function ChatSelect({ filenameList, onSelectFile }: ChatSelectProps) {
  return (
    <div>
      <Select
        onValueChange={(value) => {
          onSelectFile(value);
        }}
      >
        <SelectTrigger className="min-w-[250px] border-gray-600">
          <SelectValue placeholder="Select a product" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Product</SelectLabel>
            {filenameList.map((filename) => (
              <SelectItem value={filename}>{filename}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
