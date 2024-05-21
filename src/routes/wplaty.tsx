import { Input } from "@nextui-org/react"
import { Form } from "react-router-dom"

const WplatyPage = () => {
    return(
        <div className={"flex-auto text-foreground bg-default-100 h-screen"}>
            <Input 
            className="flex-1 items-center justify-center text-center"
            isRequired
            endContent={"PLN"}
            color="secondary"
            variant="bordered"
            label={"Kwota wpłaty"}
            type={"number"}
            step={0.01}
            ></Input>
        </div>
        
        
        
    )
}
export default WplatyPage