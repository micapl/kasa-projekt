import { Card, CardBody } from "@nextui-org/react"

const RaportyPage = () => {
    return(
        <div className={"flex flex-nowrap justify-around grow-0 shrink-0"}>
            <Card
            className="bg-content3"
            fullWidth={false}
            >
                <CardBody>
                    <p>Wygeneruj raport kasowy</p>
                </CardBody>
            </Card>
        </div>
    )
}
export default RaportyPage