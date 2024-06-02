import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Spacer,
  Checkbox,
  CheckboxGroup,
  Input,
  RangeCalendar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { Form } from "react-router-dom";
import api from "../api";
import { today, getLocalTimeZone } from "@internationalized/date";
import useDarkMode from "use-dark-mode";
import TableReport from "./table";

const RaportyPage = () => {
  const darkMode = useDarkMode();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(["Deposit ","Withdraw"]);
  const [value, setValue] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()),
  });
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()
    const res = await api.get('/fileaccess.php', {
          params:{
            ID:"report",
            content:JSON.stringify({
                "options":selected,
                "dates":value
            })
          }
        });
    setData(JSON.parse(JSON.stringify(res.data)))
    onOpen()
  }
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Spacer />
      <Card>
        <CardHeader className="justify-center">Co raportujemy?</CardHeader>
        <Divider />
        <CardBody>
          <Spacer />
          <CheckboxGroup
            label="Typy operacji"
            orientation="horizontal"
            color="secondary"
            value={selected}
            onValueChange={setSelected}
        >
            <Checkbox value="Deposit ">Wpłaty</Checkbox>
            <Checkbox value="Withdraw">Wypłaty</Checkbox>
            <Checkbox value="Verified">Inwentaryzacje</Checkbox>
          </CheckboxGroup>
          <Spacer />
          <Spacer />
          <RangeCalendar //czemu to nie chce zmienic swojej szerokosci
            visibleMonths={3}
            maxValue={today(getLocalTimeZone())}
            value={value}
            onChange={setValue}
          />
          <Spacer />
        </CardBody>
        <Divider />
        <CardFooter>
          <Input
            value={"Wygeneruj raport"}
            type={"submit"}
            color={"secondary"}
          />
        </CardFooter>
      </Card>
    </Form>
        <Modal 
           isOpen={isOpen} 
           onOpenChange={onOpenChange} 
           size="full"
           className={`${
            darkMode.value ? '' : 'dark'
          } text-foreground overflow-auto`}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
           
           >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Raport:</ModalHeader>
              <ModalBody>
              <TableReport data={data}/>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>OK</Button>
              </ModalFooter>
          </>
          )}
        </ModalContent>
            </Modal>
    </>
  );
};
export default RaportyPage;
