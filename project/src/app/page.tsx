import { HeaderForm } from "@/components/form/header-form"
import { BlogItem } from "@/components/ui/blog-item"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/ui/header"
import { Title } from "@/components/ui/title"
import { Data } from "@/data/data"

const Page = () => {
    return(
        <div>
            <Header>
                <Title firstLabel="Code" secondLabel="Lab" />
                <HeaderForm />
            </Header>
            <main className="max-w-5xl mx-auto py-[90px]">
                <div className="flex flex-col gap-10">
                    {Data.map((item, key) => (
                        <BlogItem key={key} data={item} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Page