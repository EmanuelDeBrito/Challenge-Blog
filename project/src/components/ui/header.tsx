import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Header = ({ children }: Props) => {
    return(
        <header className="py-[70px] bg-[#17171A]">
            <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">
                {children}
            </div>
        </header>
    )    
}