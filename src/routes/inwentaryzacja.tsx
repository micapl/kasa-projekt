import { Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useState, FormEvent } from "react";
import { Form } from "react-router-dom";

const disabledInputs : any = {
    500:false,
    200:false,
    100:false,
     50:false,
     20:false,
     10:false,
      5:false,
      2:false,
      1:false,
    0.5:false,
    0.2:false,
    0.1:false,
   0.05:false,
   0.02:false,
   0.01:false
  }


const InwentaryzacjaPage = () => {
    const [rerender, setRerender] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
      event.preventDefault();
      throw new Error("Function not implemented.")
    }
      return(
        <Form
          onSubmit={handleSubmit}
        >
        <Input  
          isDisabled={true}
          label="Suma"
          type={"number"}
          step={0.01}
          defaultValue="0"
          radius="none"
          endContent={<span>PLN</span>}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "text-center",
              "bg-transparent",
              "text-black/90 dark:text-white/90",
            ],
            innerWrapper: "bg-transparent h-full",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
        />
        <div className="flex flex-wrap justify-around grow-0 shrink-0">
  
        
           <Table className="w-72">
        <TableHeader>
          <TableColumn className="text-right">Nominał</TableColumn>
          <TableColumn>Ilość</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" >
            <TableCell><Input readOnly value={"500"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[500]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[500]}/></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"200"} classNames={{ input: ["text-right"] }} isDisabled={disabledInputs[200]} endContent={<span>PLN</span>}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[200]}/></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"100"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[100]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[100]}/></TableCell>
  
          </TableRow>
        </TableBody>
      </Table>
       <Table className="w-72">
        <TableHeader>
          <TableColumn className="text-right">Nominał</TableColumn>
          <TableColumn>Ilość</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" >
            <TableCell><Input readOnly value={"50"} classNames={{ input: ["text-right"] }}  endContent={<span>PLN</span>} isDisabled={disabledInputs[50]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[50]}/></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"20"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[20]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[20]}/></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"10"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[10]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[10]}/></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className="w-72">
        <TableHeader>
          <TableColumn className="text-right">Nominał</TableColumn>
          <TableColumn>Ilość</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" >
            <TableCell><Input readOnly value={"5"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[5]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[5]}/></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"2"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[2]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[2]}/></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"1"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[1]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[1]}/></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className="w-72">
        <TableHeader>
          <TableColumn className="text-right">Nominał</TableColumn>
          <TableColumn>Ilość</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" >
            <TableCell><Input readOnly value={"0,50"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[0.5]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[0.5]}/></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"0,20"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[0.2]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[0.2]}/></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"0,10"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[0.1]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[0.1]}/></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className="w-72">
        <TableHeader>
          <TableColumn className="text-right">Nominał</TableColumn>
          <TableColumn>Ilość</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" >
            <TableCell><Input readOnly value={"0,05"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[0.05]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[0.05]}/></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"0,02"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[0.02]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[0.02]}/></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"0,01"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={disabledInputs[0.01]}/></TableCell>
            <TableCell><Input type="number" step={1} defaultValue={"0"} isDisabled={disabledInputs[0.01]}/></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
          <Input
          type="submit"
          color="secondary"
          value={"Zweryfikuj"}
          >
          </Input>
        
        </Form>
      )
}  

export default InwentaryzacjaPage