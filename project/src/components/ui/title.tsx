type Props = {
    firstLabel: string,
    secondLabel: string
}

export const Title = ({ firstLabel, secondLabel }: Props) => {
    return(
        <div className="text-4xl text-white font-bold">
            <span className="mr-[2px] text-[#E07B67]">{firstLabel}</span>
            {secondLabel}
        </div>
    )
}