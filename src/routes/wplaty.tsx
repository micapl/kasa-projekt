import { Input } from "@nextui-org/react"
import { Form } from "react-router-dom"

const WplatyPage = () => {
    return(
      <Input
        label="Kwota"
        type={"number"}
        isClearable
        radius="lg"
        endContent = {"PLN"}
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "text-center",
            "bg-transparent",
            "text-black/90 dark:text-white/90",
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
      />
    )
}
export default WplatyPage