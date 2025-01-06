import { HeaderForm } from "@/components/form/header-form"
import { Header } from "@/components/ui/header"
import { Title } from "@/components/ui/title"

const Page = () => {
    return(
        <div>
            <Header>
                <Title firstLabel="Code" secondLabel="Lab" />
                <HeaderForm />
            </Header>
        </div>
    )
}

export default Page