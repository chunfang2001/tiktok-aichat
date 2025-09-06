import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ChatSelect(){
  return <div className="ml-4">
<Select>
      <SelectTrigger className="min-w-[250px] border-gray-600">
        <SelectValue placeholder="Select a product" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Product</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
}