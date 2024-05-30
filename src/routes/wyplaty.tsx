import { Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Divider, Spacer, Skeleton, CheckboxGroup, Checkbox, RadioGroup, Radio } from "@nextui-org/react";
import { FormEvent, useState, useEffect, ChangeEvent } from "react";
import { Form } from "react-router-dom";
import api from "../api";

let values: (string | undefined)[] = []
let dataLoaded = false

async function getKasaValues() {
  try {
      const response = await api.get('/fileaccess.php', {
        params: {
          ID: "state"
        }
    })
      dataLoaded = true
      values = response.data
      console.log()
  } catch (error) {
      console.error(error);
  }
}
const WyplatyPage = () => {
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

    const [selected, setSelected] = useState("automatic");
    const [rerender, setRerender] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
      event.preventDefault();
      throw new Error("Function not implemented.")
    }

    function maininputChangeHandler(event: ChangeEvent<HTMLInputElement>){
      set_total(parseFloat(event.target.value))
    }
    function smallInputChangeHandler(event: ChangeEvent<HTMLInputElement>){
      let id= parseFloat(event.target.id);
      let value= parseFloat(event.target.value);
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
    useEffect(()=>{
      getKasaValues()
    })
    let sumValues = 0
    for (let [key, value] of Object.entries(values)) {
      sumValues += (parseFloat(key)*parseInt(value!))
    }
      return(
        <div className="overflow-clip">
        <div className="text-center">Stan kasy:</div>
        <Skeleton isLoaded={dataLoaded}>
        <Input  
            isDisabled={true}
          type={"text"}
          value = {sumValues.toFixed(2).toString()}
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
        </Skeleton>  
        <div className="flex flex-wrap justify-around grow-0 shrink-0">
  
           <Table className="w-72">
        <TableHeader>
          <TableColumn className="text-right">Nominał</TableColumn>
          <TableColumn>Ilość</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" >
            <TableCell><Input readOnly value={"500"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[500]} isDisabled={true}/></Skeleton></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"200"} classNames={{ input: ["text-right"] }} isDisabled={true} endContent={<span>PLN</span>}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[200]} isDisabled={true}/></Skeleton></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"100"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[100]} isDisabled={true}/></Skeleton></TableCell>
  
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
            <TableCell><Input readOnly value={"50"} classNames={{ input: ["text-right"] }}  endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[50]} isDisabled={true}/></Skeleton></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"20"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[20]} isDisabled={true}/></Skeleton></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"10"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[10]} isDisabled={true}/></Skeleton></TableCell>
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
            <TableCell><Input readOnly value={"5"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[5]} isDisabled={true}/></Skeleton></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"2"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[2]} isDisabled={true}/></Skeleton></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"1"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[1]} isDisabled={true}/></Skeleton></TableCell>
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
            <TableCell><Input readOnly value={"0,50"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[0.5]} isDisabled={true}/></Skeleton></TableCell>
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"0,20"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[0.2]} isDisabled={true}/></Skeleton></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"0,10"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[0.1]} isDisabled={true}/></Skeleton></TableCell>
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
            
            <TableCell><Input readOnly value={"0,05"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[0.05]} isDisabled={true}/></Skeleton></TableCell>
            
          </TableRow>
          <TableRow key="2">
          <TableCell><Input readOnly value={"0,02"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[0.02]} isDisabled={true}/></Skeleton></TableCell>
  
          </TableRow>
          <TableRow key="3">
            <TableCell><Input readOnly value={"0,01"} classNames={{ input: ["text-right"] }} endContent={<span>PLN</span>} isDisabled={true}/></TableCell>
            <TableCell><Skeleton isLoaded={dataLoaded}><Input type="number" step={1} defaultValue={values[0.01]} isDisabled={true}/></Skeleton></TableCell>
          </TableRow>
        </TableBody>
       
      </Table>

      </div>
        <Spacer/>
          <Divider orientation="horizontal"/>
          <Divider orientation="horizontal"/>
        <Spacer/>

        <Form
        onSubmit={handleSubmit}
        >
      <Input  
        label="Kwota"
        type={"number"}
        onChange={maininputChangeHandler}
        step={0.01}
        isDisabled={selected==="manual"}
        value={total.toString()}
        max={sumValues.toFixed(2).toString()}
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
      <RadioGroup
      className="text-center"
        label="Tryb działania:"
        orientation="horizontal"
        value={selected}
        onValueChange={setSelected}
      >
          <Spacer className="w-1/12"/> 
         <Radio value="automatic-fair" color="success">Automatyczny - po równo</Radio>
         <Spacer className="w-1/12"/> 
         <Radio value="automatic-max" color="success">Automatyczny - najpierw największe</Radio>
         <Spacer className="w-1/12"/> 
         <Radio value="automatic-min" color="success">Automatyczny - najpierw najmniejsze</Radio>
         <Spacer className="w-1/12"/> 
         <Radio value="manual" color="success">Ręczny</Radio>
         <Spacer className="w-1/12"/> 
      </RadioGroup>
      <div className="flex flex-wrap justify-around grow-0 shrink-0">

      
         <Table className="w-72">
      <TableHeader>
        <TableColumn className="text-right">Nominał</TableColumn>
        <TableColumn>Ilość</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1" >
          <TableCell><Input readOnly value={"500"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id={"500"} step={1} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[500]}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"200"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id={"200"} step={1} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[200]}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"100"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" id={"100"} step={1} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[100]}/></TableCell>

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
          <TableCell><Input readOnly value={"50"} classNames={{ input: ["text-right"] }}  isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"50"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[50]}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"20"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"20"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[20]}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"10"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"10"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[10]}/></TableCell>
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
          <TableCell><Input readOnly value={"5"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"5"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[5]}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"2"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"2"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[2]}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"1"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"1"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[1]}/></TableCell>
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
          <TableCell><Input readOnly value={"0.5"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"0.5"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[0.5]}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"0,20"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"0.2"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[0.2]}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"0,10"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"0.1"}min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[0.1]}/></TableCell>
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
          <TableCell><Input readOnly value={"0,05"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"0.05"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[0.05]}/></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Input readOnly value={"0,02"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"0.02"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[0.02]}/></TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell><Input readOnly value={"0,01"} classNames={{ input: ["text-right"] }} isDisabled={selected.startsWith("automatic")} endContent={<span>PLN</span>}/></TableCell>
          <TableCell><Input type="number" step={1} id={"0.01"} min={0} defaultValue={"0"} onChange={smallInputChangeHandler} isDisabled={selected.startsWith("automatic")} max={values[0.01]}/></TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
        <Input
        type="submit"
        color="primary"
        value={"Wypłać"}
        >
        </Input>
      
      </Form>
    </div>
      )
      
  }

export default WyplatyPage;