import { Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { Form } from "react-router-dom"
import api from "../api"
const WplatyPage = () => {
  const [rerender, setRerender] = useState(false);
  const [total,set_total]=useState(0);
  const [inputs,set_inputs] = useState({
    500:0.0,
    200:0.0,
    100:0.0,
     50:0.0,
     20:0.0,
     10:0.0,
      5:0.0,
      2:0.0,
      1:0.0,
    0.5:0.0,
    0.2:0.0,
    0.1:0.0,
   0.05:0.0,
   0.02:0.0,
   0.01:0.0,
  })
  function smallInputChangeHandler(event: ChangeEvent<HTMLInputElement>){
    let id = parseFloat(event.target.id.slice(6));
    let value = parseFloat(event.target.value);
    const newValues = {
      ...inputs,
      [id]: value
  } 
    set_inputs(newValues)
    calc_total(newValues) 
  }
  const calc_total = (newValues: { 500?: number; 200?: number; 100?: number; 50?: number; 20?: number; 10?: number; 5?: number; 2?: number; 1?: number; 0.5?: number; 0.2?: number; 0.1?: number; 0.05?: number; 0.02?: number; 0.01?: number}) => {
      let subvalueSum = 500*newValues[500]!+200*newValues[200]!+100*newValues[100]!+50*newValues[50]!+20*newValues[20]!+10*newValues[10]!+5*newValues[5]!+2*newValues[2]!+1*newValues[1]!+0.5*newValues[0.5]!+0.2*newValues[0.2]!+0.1*newValues[0.1]!+0.05*newValues[0.05]!+0.02*newValues[0.02]!+0.01*newValues[0.01]!
      set_total(subvalueSum)
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    let json : any = {}
    let inputelement = document.querySelectorAll("[id^='input-']");
    inputelement.forEach(temp => {
      //@ts-ignore
      let id= parseFloat(temp.id.slice(6));
      //@ts-ignore
      let value= parseFloat(temp.value);
      json = {
        ...json,
        [id] : value
      }
    });
    const res = await api.get('/fileaccess.php', {
      params:{
        ID:"deposit",
        content:JSON.stringify(json)
      }
    });
    console.log(res)
  }
  
    return(
      <Form
        onSubmit={handleSubmit}
      >
      <Input  
        label="Kwota"
        type={"number"}
        step={0.01}
        readOnly
        value={total.toString()}
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
          <TableCell><Input readOnly value={"500"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-500" step={1} min={0} defaultValue={"0"} onChange={smallInputChangeHandler}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"200"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-200" step={1} min={0} defaultValue={"0"} onChange={smallInputChangeHandler}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"100"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} /></TableCell>
          <TableCell><Input type="number" id="input-100" step={1} min={0} defaultValue={"0"} onChange={smallInputChangeHandler}/></TableCell>

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
          <TableCell><Input readOnly value={"50"} classNames={{ input: ["text-right"] }}  endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-50" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"20"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-20" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"10"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-10" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>
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
          <TableCell><Input readOnly value={"5"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-5" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"2"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-2" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"1"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-1" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>
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
          <TableCell><Input readOnly value={"0,50"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-0.5" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"0,20"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-0.2" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"0,10"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-0.1" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>
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
          <TableCell><Input readOnly value={"0,05"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-0.05" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"0,02"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-0.02" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"0,01"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id="input-0.01" step={1} min={0} defaultValue={"0"}onChange={smallInputChangeHandler}/></TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
        <Input
        type="submit"
        color="primary"
        value={"Wpłać"}
        >
        </Input>
      
      </Form>
    )
}
export default WplatyPage