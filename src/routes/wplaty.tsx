import { Input } from "@nextui-org/react"
import { Form } from "react-router-dom"

const WplatyPage = () => {
    return(
        <div className={"flex-initial grow-0 text-foreground bg-default-100 h-screen"}>
            <Form>
            <Input 
            classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
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
            isRequired
            radius="lg"
            endContent={"PLN"}
            color="secondary"
            variant="bordered"
            label={"Kwota wpłaty"}
            type={"number"}
            step={0.01}
            ></Input>
            </Form>
        </div>
        
        
        
    )
}
export default WplatyPage